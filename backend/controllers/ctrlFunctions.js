const Msg = require('../models/msgschema')
const mongoose = require('mongoose')

// CREATE db entry
const postData = async (req, res) => {
    const {fname, lname, email, phone} = req.body

    try {
        const createMessage =  await Msg.create({fname, lname, email, phone})
        res.status(200).json(createMessage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// READ db entries
const getData = async (req, res) => {
    try {
        const getMessages = await Msg.find({}).sort({createdAt: -1})
        res.status(200).json(getMessages)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// UPDATE db entry
const updateData = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Not a valid id'})
    }

    const updateMessage = await Msg.findOneAndUpdate({_id: id}, {...req.body}, {new: true})

    if (!updateMessage) {
        return res.status(400).json({error: 'Can\'t find workout'})
    }
    res.status(200).json(updateMessage)

}

// DELETE db entry
const delData = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Not a valid id'})
    }

    const delMessage = await Msg.findOneAndDelete({_id: id})
    
    if (!delMessage) {
        return res.status(400).json({error: 'No message'})
    }

    res.status(200).json(delMessage)
     
}



module.exports = {
    postData,
    getData,
    delData,
    updateData
}