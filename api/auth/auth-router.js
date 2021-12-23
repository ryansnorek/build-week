const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

const {
  reqBodyIsValid,
  checkIfUserExistsAlready,
  confirmAndStoreUser,
  tokenBuilder,
  hashPassword,
} = require("./auth-middleware");

router.post(
  "/register",
  reqBodyIsValid,
  checkIfUserExistsAlready,
  hashPassword,
  (req, res, next) => {
    const { username, password, phone } = req.body;
    Users.createUser({
      username,
      password,
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
        user_id: req.user.user_id,
        message: `welcome, ${req.user.username}`, 
        token 
    });
  }
);

module.exports = router;
