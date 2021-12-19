const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

const {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  userExistsOnLogin,
  tokenBuilder,
} = require("./auth-middleware");

router.post(
  "/register",
  reqBodyIsValid,
  checkIfUserExistsAlready,
  (req, res, next) => {
    const { username, password, phone } = req.body;
    const hash = bcrypt.hashSync(password, process.env.BCRYPT_ROUNDS);
    Users.createUser({ username, password: hash, phone })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  reqBodyIsValid,
  userExistsOnLogin,
  (req, res, next) => {
    const { password } = req.body;
    const passwordMatch = bcrypt.compareSync(password, req.user.password);
    if (!passwordMatch) {
        return next({ message: "invalid credentials" });
    }
    const token = tokenBuilder(req.user);
    res.json({
      message: `welcome, ${req.user.username}`,
      token,
    });
  }
);

module.exports = router;
