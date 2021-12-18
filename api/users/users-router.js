const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res, next) => {
    Users.getAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.get("/:id", (req, res, next) => {
    res.json("get by id")
})

router.post("/", (req, res, next) => {
    res.json("get by id")
})


module.exports = router;

