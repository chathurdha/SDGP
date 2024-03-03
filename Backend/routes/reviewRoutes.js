const express = require('express');
const {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/reviewController');
const router = express.Router();

//get all schools
router.get('/', getReviews);

//get single school
router.get('/:id', getReview);

//create a school
router.post('/', createReview);

//update a school
router.patch('/:id', updateReview);

//delete a school
router.delete('/:id', deleteReview);

module.exports = router;