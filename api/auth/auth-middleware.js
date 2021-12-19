const { findUser } = require("../users/users-model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  confirmAndStoreUser,
  tokenBuilder,
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
  !user ? next() : 
  next({ 
      message: "username taken", 
      status: 422 
    });
}

async function confirmAndStoreUser(req, res, next) {
  const user = await getUserById(req.body.username);
  user.length ? 
  req.user = user[0] :
  next({
      message: "invalid credentials", 
      status: 401
  });
  next();
}

function tokenBuilder(user) {
  const options = { expiresIn: "1d" };
  const payload = { 
      subject: user.id, 
      username: user.username 
    };
  return jwt.sign(
      options,
      payload, 
      JWT_SECRET,
    );
}
