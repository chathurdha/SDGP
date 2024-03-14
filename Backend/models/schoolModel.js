const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profileColor: {
        type: String,
        default: null
    },
    profileImageAvailable: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('School', schoolSchema);