const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res, next) => {
  Users.getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Users.getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  res.json("get by id");
});

module.exports = router;
