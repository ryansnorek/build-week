require("dotenv").config();
const { findUser } = require("../users/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  confirmAndStoreUser,
  tokenBuilder,
  hashPassword,
};

function reqBodyIsValid(req, res, next) {
  const { username, password } = req.body;
  username && password ? next() : 
  next({ 
      message: "username and password required", 
      status: 401
    });
}

async function checkIfUserExistsAlready(req, res, next) {
  const user = await findUser(req.body.username);
  if (user) {
    return next({ 
        message: "username taken", 
        status: 422 
      });
  }
  next();
}

async function confirmAndStoreUser(req, res, next) {
  const user = await findUser(req.body.username);
  if (!user) {
    return next({
        message: "invalid credentials", 
        status: 401
    });
  }
  req.user = user;
  next();
}

function tokenBuilder(user) {
  const options = { expiresIn: "1d" };
  const payload = { 
      subject: user.user_id, 
      username: user.username 
    };
  return jwt.sign(
      payload, 
      `${process.env.JWT_SECRET}`,
      options,
    );
}

function hashPassword(req, res, next) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password);
  }
  next();
}