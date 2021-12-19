const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS } = process.env;
const Users = require("../users/users-model");

const {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  confirmAndStoreUser,
  tokenBuilder,
} = require("./auth-middleware");

router.post(
  "/register",
  reqBodyIsValid,
  checkIfUserExistsAlready,
  (req, res, next) => {
    const { username, password, phone } = req.body;
    const hash = bcrypt.hashSync(password);
    Users.createUser({
      username,
      password: hash,
      phone,
    })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  reqBodyIsValid,
  confirmAndStoreUser,
  (req, res, next) => {
    const { password } = req.body;
    const passwordMatches = bcrypt.compareSync(password, req.user.password);
    if (!passwordMatches) {
        return next({ message: "invalid credentials" });
    }
    const token = tokenBuilder(req.user);
    res.json({ 
        message: `welcome, ${req.user.username}`, 
        token 
    });
  }
);

module.exports = router;
