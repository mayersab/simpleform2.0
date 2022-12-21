const mongoose = require('mongoose')

// define schema
const Schema = mongoose.Schema

const mesgSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true}  
}, {timestamps: true})


module.exports = mongoose.model('MessageModel', mesgSchema)