const express = require('express');
const {
    getVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
} = require('../controllers/volunteerController');
const router = express.Router();

//get all volunteers
router.get('/', getVolunteers);

//get single volunteer
router.get('/:id', getVolunteer);

//create a volunteer
router.post('/', createVolunteer);

//update a volunteer
router.patch('/:id', updateVolunteer);

//delete a volunteer
router.delete('/:id', deleteVolunteer);

module.exports = router;