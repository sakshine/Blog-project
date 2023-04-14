const mongoose =require('mongoose')
const { stringify } = require('qs')

// define schema 
const aboutSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    
},{timestamps:true})


// create collection             
const AboutModel= mongoose.model('about',aboutSchema)
//                                ^ collection name  


module.exports=AboutModel