const Seminar = require('../models/seminarModel');
const mongoose = require('mongoose');

//get all seminars
const getSeminars = async (req, res) => {
    const seminars = await Seminar.find({}).sort({createdAt: -1});
    res.status(200).json(seminars);
}

//get single seminar
const getSeminar = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such seminar with that id"});
    }

    const seminar = await Seminar.findById(id);

    if(!seminar){
        return res.status(404).json({error: " No such seminar with that id"});
    }

    res.status(200).json(seminar);
}

//create a seminar
const createSeminar = async (req, res) => {
    const { name, description} = req.body;

    let emptyFields = [];

    if(!name) {
        emptyFields.push('name');
    }

    if(!description) {
        emptyFields.push('description');
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error:`The following fields are required'`, emptyFields});
    }

    //add to database
    try{
        const seminar = await Seminar.create({
            name,
            description
        });
        res.status(200).json(seminar);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete a seminar
const deleteSeminar = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    const seminar = await Seminar.findOneAndDelete({ _id: id });

    if(!seminar){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    res.status(200).json(seminar);
}

//update a seminar
const updateSeminar = async (req, res) => {
    const { id } = req.params;
    const { name, description, date, time, location, image } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    const seminar = await Seminar.findOneAndUpdate({ _id: id }, {
        ...req.body});

    if(!seminar){
        return res.status(400).json({error: 'No seminar with that id'});
    }

    res.status(200).json(seminar);
}

module.exports = {
    getSeminars,
    getSeminar,
    createSeminar,
    deleteSeminar,
    updateSeminar
}
