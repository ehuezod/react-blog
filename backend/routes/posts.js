const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
    Post.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
    const creatorUsername = req.body.creatorUsername;
    const title = req.body.title;
    const postText = req.body.postText;

    const newPost = new Post({
        creatorUsername,
        title,
        postText,
    });

    newPost
        .save()
        .then(() => res.json("Post created!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;