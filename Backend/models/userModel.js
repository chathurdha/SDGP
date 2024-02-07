const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: 'basic'
    },
    password: {
        type: String,
        minlength: 10,
        required: true
    }
});
const User = mongoose.model("user", userModel)
module.exports = User;