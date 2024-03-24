const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    posivite: { 
        type: Number, 
        required: true,
        default: 0
    },
    negative: { 
        type: Number, 
        required: true,
        default: 0
    },
    neutral: { 
        type: Number, 
        required: true,
        default: 0
    },
    seminarId: { 
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },


}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);