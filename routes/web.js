const express= require('express')
const router= express.Router()
const FrontController=require('../controllers/FrontController')
const AdminController = require('../controllers/admin/adminController')
const BlogController = require('../controllers/admin/blogController')
const CategoryController = require('../controllers/admin/CategoryController')
const ContactController = require('../controllers/admin/ContactController')
// const AboutController = require('../controllers/admin/aboutController')
// const {about} = require('../controllers/FrontController')
const admin_auth = require('../middleware/auth') 


//frontend controller outer
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/contact',FrontController.contact)
router.get('/blog',FrontController.blog)
router.get('/login',FrontController.login)
router.get('/blogdetail/:id',FrontController.blogdetail)
router.get('/register',FrontController.adminregister)
router.post('/adminregister',FrontController.admininsert)
router.post('/verify_login',FrontController.verifylogin)
router.get('/logout',FrontController.logout) 


//admin controller routes
router.get('/admin/dashboard',admin_auth,AdminController.dashboard)

//about controller
// router.get('/admin/about',AboutController.about)
// router.get('/admin/aboutedit',AboutController.aboutedit)
// router.post('/aboutupdate',AboutController.aboutupdate)

//admin blogcontroller
router.get('/admin/blogdisplay',admin_auth,BlogController.blogdisplay)
router.post('/bloginsert',admin_auth,BlogController.bloginsert)
router.get('/admin/blogview/:id',admin_auth,BlogController.blogview)
router.get('/admin/blogedit/:id',admin_auth,BlogController.blogedit)
router.post('/blogupdate/:id',admin_auth,BlogController.blogupdate)
router.get('/admin/blogdelete/:id',admin_auth,BlogController.blogdelete)


//admin categorycontroller
router.get('/admin/category',admin_auth,CategoryController.categorydisplay)
router.post('/createblog',admin_auth,CategoryController.categoryinsert)
router.get('/admin/categoryview/:id',admin_auth,CategoryController.categoryview)
router.get('/admin/categoryedit/:id',admin_auth,CategoryController.categoryedit)
router.post('/categoryupdate/:id',admin_auth,CategoryController.categoryupdate)
router.get('/admin/categorydelete/:id',admin_auth,CategoryController.categorydelete)

router.post('/contactinsert',admin_auth,ContactController.contactinsert)
router.get('/admin/contactdisplay',admin_auth,ContactController.contactview)

module.exports=router