const mongoose = require('mongoose');
const user = require('./userModel');

const Schema = mongoose.Schema;

 const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    logo: [
        {
          public_id: {
            type: String, //rename with id_logo 
            required: true,
          },
          url: {
            type: String,  //use gdrive://
            required: true,
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

// --

// const mongoose = require('mongoose');
// const user = require('userModel');
// const organization =  mongoose.Schema({
//     __typename: 'organization',
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     website: {
//         type: String,
//         required: false
//     },
//     logo: [
//         {
//           public_id: {
//             type: String, //rename with id_logo 
//             required: true,
//           },
//           url: {
//             type: String,  //use gdrive://
//             required: true,
//           },
//         },
//       ],
//     users: [user ,{
//         role: 'admin',
//     }],
// });
// const Organization = Mongoose.model("organization", organization)
// module.exports = Organization;