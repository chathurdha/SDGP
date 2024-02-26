const Review = require('../models/reviewModel');
const mongoose = require('mongoose');

// Get all reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({}).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get single review
const getReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No review with that id' });
    }

    try {
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ error: 'No review with that id' });
        }

        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create a review
const createReview = async (req, res) => {
    const { title, description, rating } = req.body;

    if (!title || !description || !rating) {
        return res.status(400).json({ error: 'Title, description, and rating are required' });
    }

    try {
        const review = await Review.create({ title, description, rating });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//delete a review
const deleteReview = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send('No review with that id');
    }

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
        return res.status(400).json({ error: 'No review with that id' });
    }

    res.status(200).json(review);
}


//update a review
const updateReview = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send('No review with that id');
    }

    const review = await Review.findByIdAndUpdate({_id: id}, {...req.body});

    if (!review) {
        return res.status(400).json({ error: 'No review with that id' });
    }

    res.status(200).json(review);
}

module.exports = {
    getReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview
}