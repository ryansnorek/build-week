const router = require("express").Router();

const Plants = require("./plants-model");

router.get("/", (req, res, next) => {
    Plants.getAllPlants()
      .then((plants) => {
        res.json(plants);
      })
      .catch(next);
  });
  
  router.get("/:id", (req, res, next) => {
    Plants.getPlantById(req.params.id)
      .then((plant) => {
        res.json(plant);
      })
      .catch(next);
  });
  
  router.post("/", (req, res, next) => {
    Plants.createPlant(req.body)
      .then((newPlant) => {
        res.json(newPlant);
      })
      .catch(next);
  });
  
  router.delete("/:id", (req, res, next) => {
    Plants.deletePlant(req.params.id)
      .then((deletedPlant) => {
        res.json(deletedPlant);
      })
      .catch(next);
  });

  module.exports = router;