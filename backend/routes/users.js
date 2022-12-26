const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/validate").post((req, res) => {
    User.find({
            username: req.body.username,
            password: req.body.password,
        })
        .then((users) => {
            // checks if the mongo query has 1 or more users, and sends boolean response
            if (users.length > 0) {
                res.send(true);
            } else {
                res.send(false);
            }
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const profilePicture = req.body.profilePicture;

    const newUser = new User({
        username,
        email,
        password,
        profilePicture,
    });

    newUser
        .save()
        .then(() => res.json("User added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;