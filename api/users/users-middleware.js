const { getUserById } = require("./users-model");

module.exports = {
    checkIfUserExists,
}

async function checkIfUserExists(req, res, next) {
    const user = await getUserById(req.params.id);
    if (!user) {
      return next({ 
          message: "user does not exist", 
          status: 401 
        });
    }
    req.user = user;
    next();
}