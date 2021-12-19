const db = require("../data/db-config");

module.exports = {
  getAllPlants,
  getPlantById,
  createPlant,
  deletePlant,
};

function getAllPlants() {
  return db("plants");
}

function getPlantById(plant_id) {
  return db("plants").where("plant_id", plant_id);
}

async function createPlant(plant) {
  const [newUser] = await db("plants")
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
    user_id: newUser.user_id,
    plant_id: newUser.plant_id,
   })
  return newUser;
}

async function deletePlant(plant_id) {
  const [deletedUser] = await db("plants")
    .where("plant_id", plant_id)
    .delete([
     "plant_id", 
     "nickname", 
    ]);
  return deletedUser;
}
