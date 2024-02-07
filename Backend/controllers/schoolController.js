const School = require('../models/schoolModel');
const mongoose = require('mongoose');

//get all schools
const getSchools = async (req, res) => {
    const schools = await School.find({}).sort({createdAt: -1});
    res.status(200).json(schools);
}

//get single school
const getSchool = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: ' No school with that id'});
    }

    const school = await School.findById(id);

    if(!school){
        return res.status(404).json({error: ' No school with that id'});
    }

    res.status(200).json(school);
}

//create a school
const createSchool = async (req, res) => {
    const { name, address } = req.body;

    let emptyFields = [];

    if(!name){
        emptyFields.push('name');
    }

    if(!address){
        emptyFields.push('address');
    }

    if(emptyFields.length > 0){
        return res.status(400).send(`The following fields are required:`, emptyFields);
    }

    //add to database
    try {
        const school = await School.create({name, address});
        res.status(200).json(school);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//delete a school
const deleteSchool = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send('No school with that id');
    }

    const school = await School.findByIdAndDelete(id);

    if (!school) {
        return res.status(400).json({ error: 'No school with that id' });
    }

    res.status(200).json(school);
}

//update a school
const updateSchool = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: 'No school with that id' });
    }

    const school = await School.findOneAndUpdate({ _id: id}, {...req.body})

    if (!school) {
        return res.status(400).json({ error: 'No school with that id' });
    }

    res.status(200).json(school);
}

module.exports = {
    getSchools,
    getSchool,
    createSchool,
    deleteSchool,
    updateSchool
}