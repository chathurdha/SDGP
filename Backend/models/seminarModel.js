const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seminarSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Seminar"
    },
    description: {
        type: String,
        required: true,
        default: "This is a seminar"
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    expStudentCount: {
        type: Number,
        required: true
    },
    expTeacherCount: {
        type: Number,
        required: true
    },
    additionalRequests: {
        type: String,
        required: true,
        default: "No additional requests"
    },
    expDate: {
        type: String,
        required: true
    },
    volunteers: [
        {
            volunteerId: {
                type: mongoose.Schema.Types.ObjectId,
                // type: String,
                ref: 'Volunteer', // Reference to the Volunteer model
            }
        }
    ],

    schoolId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    organizationId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
    // volunteer organization id should be added here
    //     { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 1", grade: "grade 1", expStudentCount: 10, expTeacherCount: 2, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "2nd of May, 2022", schoolId: 1},
},{
    timestamps: true,
});

module.exports = mongoose.model('Seminar', seminarSchema);
