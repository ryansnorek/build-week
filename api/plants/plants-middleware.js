const { getPlantById } = require("./plants-model");

module.exports = {
  checkIfPlantExists,
  reqBodyIsValid,
};

async function checkIfPlantExists(req, res, next) {
  const plant = await getPlantById(req.params.id);
  if (!plant.length) {
    return next({
      message: "plant does not exist",
      status: 401,
    });
  }
  req.plant = plant[0];
  next();
}

function reqBodyIsValid(req, res, next) {
  const { nickname, user_id } = req.body;
  if (!nickname || !user_id) {
    return next({
      message: "nickname and user_id required",
      status: 400,
    });
  }
  next();
}
