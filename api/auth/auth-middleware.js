const { getUserById } = require("../users/users-model");
const jwt = require("jsonwebtoken");

module.exports = {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  userExistsOnLogin,
  tokenBuilder,
};

function reqBodyIsValid(req, res, next) {
  const { username, password } = req.body;
  const error = { message: "username and password required" };
  username && password ? next() : next(error);
}

async function checkIfUserExistsAlready(req, res, next) {
  const error = { message: "username taken", status: 422 };
  const user = await getUserById(req.params.id);
  !user.length ? next() : next(error);
}

async function userExistsOnLogin(req, res, next) {
  const error = { message: "invalid credentials", status: 401 };
  const user = await getUserById(req.body.username);
  if (!user.length) {
    return next(error);
  }
  req.user = user[0];
  next();
}

function tokenBuilder(user) {
  const options = { expiresIn: "1d" };
  const payload = { subject: user.id, username: user.username };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}
