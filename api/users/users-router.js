const router = require("express").Router();
const { hashPassword } = require("../auth/auth-middleware");
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

router.get("/plants/:id", (req, res, next) => {
  Users.getPlantsByUserId(req.params.id)
    .then((plants) => {
      res.json(plants);
    })
    .catch(next);
});

router.put("/:id", hashPassword, (req, res, next) => {
  Users.updateUser(req.body, req.params.id)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Users.deleteUser(req.params.id)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch(next);
});

module.exports = router;
