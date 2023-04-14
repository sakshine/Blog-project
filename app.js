const express = require('express')

const connectDB=require('./db/connect_db')
const cloudinary = require('cloudinary')
var session = require('express-session')
var flash = require('connect-flash');
const router= require('./routes/web')
const app=express()
const port =3000
//body parser 
const bodyParser=require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser()) 
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

// file uploader
const fileUpload = require("express-fileupload");

const { Router } = require('express')
app.use(fileUpload({useTempFiles: true}));
//session and flash use 
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));

app.use(flash());

//mongodb connection
connectDB()
//setup ejs
app.set('view engine','ejs')

//about controoller
//static files path
app.use(express.static('public'))

// router link.
app.use('/',router)

//server create
app.listen(port, () => {
    console.log(`server is running at localhost: ${port}`)
  })

module.exports=Router