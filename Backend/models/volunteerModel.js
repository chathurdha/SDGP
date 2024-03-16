const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    volunteerId: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    volunteerProfileImageAvailable: {
        type: Boolean,
        required: false
    },
    volunteerProfileColor: {
        type: String,
        required: false
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Volunteer', volunteerSchema);