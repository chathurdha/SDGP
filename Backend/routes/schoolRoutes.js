const express = require('express');
const {
    getSchools,
    getSchool,
    createSchool,
    updateSchool,
    deleteSchool
} = require('../controllers/schoolController');
const router = express.Router();

//get all schools
router.get('/', getSchools);

//get single school
router.get('/:id', getSchool);

//create a school
router.post('/', createSchool);

//update a school
router.patch('/:id', updateSchool);

//delete a school
router.delete('/:id', deleteSchool);

module.exports = router;