const db = require("../data/db-config");

module.exports = {
  getAllUsers,
  getUserById,
  insertUser,
};

function getAllUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where("user_id", id);
}

async function insertUser(user) {
  const [newUser] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
    "phone",
  ]);
  return newUser;
}
