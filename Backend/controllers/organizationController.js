const Organization = require('../models/organizationModel');
const mongoose = require('mongoose');

//get all organizations
const getOrganizations = async (req, res) => {
    const organizations = await Organization.find({}).sort({createdAt: -1});
    res.status(200).json(organizations);
}

//get single organization
const getOrganization = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No organization with that id');
    }

    const organization = await Organization.findById(id);

    if(!organization){
        return res.status(404).send('No organization with that id');
    }

    res.status(200).json(organization);
}

module.exports = {
    getOrganizations,
    getOrganization
}

