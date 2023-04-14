const jwt = require('jsonwebtoken')
const Adminmodel = require('../models/adminmodel')

const admin_auth = async(req,res,next)=>{
    try{
      const{token}=req.cookies

      const verify_token = jwt.verify(token,'sakshi@123')

      const admin_data = await Adminmodel.findOne({_id:verify_token.id})

      req.admin = admin_data
      next() 
    
    }
    catch(error){
        res.redirect('/login')
    }

}

module.exports = admin_auth