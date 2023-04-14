const mongoose =require('mongoose')

// define schema 
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


// create collection             
const AdminModel= mongoose.model('admin',adminSchema)
//                                ^ collection name  


module.exports=AdminModel