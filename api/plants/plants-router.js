const router = require("express").Router();
const restricted = require("../restricted/middleware");
const { reqBodyIsValid, checkIfPlantExists } = require("./plants-middleware");
const Plants = require("./plants-model");

router.get("/", (req, res, next) => {
  Plants.getAllPlants()
    .then((plants) => {
      res.json(plants);
    })
    .catch(next);
});

router.get("/:id", checkIfPlantExists, (req, res, next) => {
  res.json(req.plant);
});

// RESTRICTED w/out token ------------------------- //

router.post("/", reqBodyIsValid, restricted, (req, res, next) => {
  Plants.createPlant(req.body)
    .then((newPlant) => {
      res.json(newPlant);
    })
    .catch(next);
});

router.put("/:id", restricted, (req, res, next) => {
  Users.updatePlant(req.body, req.params.id)
    .then((updatedPlant) => {
      res.json(updatedPlant);
    })
    .catch(next);
});

router.delete("/:id", restricted, (req, res, next) => {
  Plants.deletePlant(req.params.id)
    .then((deletedPlant) => {
      res.json(deletedPlant);
    })
    .catch(next);
});

module.exports = router;
