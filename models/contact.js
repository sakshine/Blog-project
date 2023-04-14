const mongoose = require('mongoose')

// define schema
const contactSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
     Phone: {
        type : String,
        require : true,
    },
    message: {
        type : String,
        required : true
    } 
},{timestamps:true})

const contactModel = mongoose.model('contact', contactSchema)

module.exports = contactModel