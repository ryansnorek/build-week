const db = require("../data/db-config");

module.exports = {
  getAllUsers,
  getUserById,
  getPlantsByUserId,
  createUser,
  updateUser,
  deleteUser,
};

function getAllUsers() {
  return db("users");
}

function getUserById(user_id) {
  return db("users").where("user_id", user_id);
}

function getPlantsByUserId(user_id) {
  // select * from plants
  // left join user_plants
  // on user_plants.plant_id = plants.plant_id
  // where user_plants.user_id = {user_id};
  return db("plants")
    .leftJoin("user_plants", {
      "user_plants.plant_id": "plants.plant_id",
    })
    .where("user_plants.user_id", user_id);
}

async function createUser(user) {
  const [newUser] = await db("users")
    .insert(user, [
        "user_id",
        "username",
        "password",
        "phone",
    ]);
  return newUser;
}

async function updateUser(user, user_id) {
  const [updatedUser] = await db("users")
    .where("user_id", user_id)
    .update(user, [
        "user_id",
        "username",
        "password",
        "phone",
    ]);
  return updatedUser;
}

async function deleteUser(user_id) {
  const [deletedUser] = await db("users")
    .where("user_id", user_id)
    .delete([
        "user_id", 
        "username", 
        "password", 
        "phone"
    ]);
  return deletedUser;
}
