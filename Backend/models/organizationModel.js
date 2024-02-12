const mongoose = require('mongoose');
const user = require('./userModel');

const Schema = mongoose.Schema;

 const organizationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String,
        required: false,
        unique: true
    },
    logo: [
        {
          public_id: {
            type: String, //rename with id_logo 
            required: true
          },
          url: {
            type: String,  //use gdrive://
            required: true,
            unique: true
          },
        },
      ],
      user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        role: 'Admin'
    }]
});

module.exports = mongoose.model('Organization', organizationSchema);