const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seminarSchema = new Schema({
    school: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
    // volunteer organization id should be added here
},{
    timestamps: true,
});

module.exports = mongoose.model('Seminar', seminarSchema);
