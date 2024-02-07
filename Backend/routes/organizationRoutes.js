const express = require('express');
const {
    getOrganizations,
    getOrganization,
    createOrganization,
    updateOrganization,
    deleteOrganization
} = require('../controllers/organizationController');
const router = express.Router();

//get all organizations
router.get('/', getOrganizations);

//get single organization
router.get('/:id', getOrganization);

//create an organization
router.post('/', createOrganization);

//update an organization
router.patch('/:id', updateOrganization);

//delete an organization
router.delete('/:id', deleteOrganization);

module.exports = router;