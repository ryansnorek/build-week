const router = require("express").Router();
const { hashPassword } = require("../auth/auth-middleware");
const { checkIfUserExists } = require("./users-middleware");
const restricted = require("../restricted/middleware");
const Users = require("./users-model");

router.get("/", (req, res, next) => {
  Users.getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:id", checkIfUserExists, (req, res, next) => {
  res.json(req.user);
});

// RESTRICTED w/out token ------------------------- //

router.get(
  "/:id/plants",
  checkIfUserExists,
  restricted,
  (req, res, next) => {
    Users.getPlantsByUserId(req.params.id)
      .then((plants) => {
        res.json(plants);
      })
      .catch(next);
  }
);

router.put(
  "/:id",
  checkIfUserExists,
  hashPassword,
  restricted,
  (req, res, next) => {
    Users.updateUser(req.body, req.params.id)
      .then((updatedUser) => {
        res.json(updatedUser);
      })
      .catch(next);
  }
);

router.delete(
  "/:id",
  checkIfUserExists,
  restricted,
  (req, res, next) => {
    Users.deleteUser(req.params.id)
      .then((deletedUser) => {
        res.json(deletedUser);
      })
      .catch(next);
  }
);

module.exports = router;
