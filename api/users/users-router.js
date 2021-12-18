const router = require("express").Router();

const { getAllUsers, insertUser } = require("./users-model");

router.get("/", (req, res, next) => {
    res.json("get")
})

module.exports = router;

