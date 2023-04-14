const mongoose = require('mongoose')

// define schema
const blogSchema = new mongoose.Schema({
    image:    
    {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        required : true
    } 
},{timestamps:true})

const BlogModel = mongoose.model('blog', blogSchema)

module.exports = BlogModel