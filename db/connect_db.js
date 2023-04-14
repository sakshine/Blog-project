const mongoose = require('mongoose')
const url = 'mongodb+srv://sakshigalgale29:sakshi_29@cluster0.bzlthqh.mongodb.net/?retryWrites=true&w=majority'

const connectDB=()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log('connection sucessful')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB  