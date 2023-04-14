const mongoose = require('mongoose')

// Define schema
const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    image:    
    {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
},{timestamps: true})


// create collection
const Category = mongoose.model('Category',CategorySchema)

module.exports=Category