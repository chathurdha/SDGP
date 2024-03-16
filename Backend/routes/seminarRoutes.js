const express = require('express');
const {
    getSeminar,
    getSeminars,
    createSeminar,
    updateSeminar,
    deleteSeminar,
    getUpcomingSeminars,
    getPastSeminars
} = require('../controllers/seminarController');
const router = express.Router();

//get all seminars
router.get('/', getSeminars);

router.get('/upcoming', getUpcomingSeminars)

router.get('/past', getPastSeminars)

//get single seminar
router.get('/:id', getSeminar);

//create a new seminar
router.post('/', createSeminar);

//delete a seminar
router.delete('/:id', deleteSeminar);

//update a seminar
router.patch('/:id', updateSeminar);

module.exports = router;