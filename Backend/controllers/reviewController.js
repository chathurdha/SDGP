const Review = require('../models/reviewModel');
const mongoose = require('mongoose');

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