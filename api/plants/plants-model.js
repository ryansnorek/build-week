const db = require("../data/db-config");

module.exports = {
  getAllPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
};

function getAllPlants() {
  return db("plants");
}

function getPlantById(plant_id) {
  return db("plants").where("plant_id", plant_id);
}

async function createPlant(plant) {
  const [newPlant] = await db("plants")
  .insert(plant, [
    "plant_id",
    "nickname",
    "species",
    "h2o_frequency",
    "uploaded_image",
    "user_id",
  ]);
  await db("user_plants")
  .insert({ 
    user_id: newPlant.user_id,
    plant_id: newPlant.plant_id,
   })
  return newPlant;
}

async function updatePlant(plant, plant_id) {
  const [updatedPlant] = await db("plants")
    .where("plant_id", plant_id)
    .update(plant, [
      "plant_id",
      "nickname",
      "species",
      "h2o_frequency",
      "uploaded_image",
      "user_id",
    ]);
  return updatedPlant;
}

async function deletePlant(plant_id) {
  const [deletedPlant] = await db("plants")
    .where("plant_id", plant_id)
    .delete([
      "plant_id",
      "nickname",
      "species",
      "h2o_frequency",
      "uploaded_image",
      "user_id",
    ]);
  return deletedPlant;
}
