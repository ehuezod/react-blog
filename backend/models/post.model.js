const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    creatorUsername: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    postText: {
        type: String,
        required: true,
        unique: false,
    },
}, {
    timestamps: true, //add creation timestamp for when it was created
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;