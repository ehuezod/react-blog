const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    profilePicture: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
}, {
    timestamps: true, //add creation timestamp for when it was created
});

const User = mongoose.model("User", userSchema);
module.exports = User;