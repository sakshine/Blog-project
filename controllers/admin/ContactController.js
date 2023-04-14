require("../../models/contact")

class ContactController{
    static contactdisplay=(req,res)=>{
        res.render('admin/contact/contactdisplay')
    }
    static contactinsert = async(req,res)=>{
        
        try{
            const result = new contactModel({
                name:req.body.name,
                email:req.body.email,
                Phone:req.body.Phone,
                message:req.body.message,
            }) 
            await result.save()
            res.redirect('/contact')
        }catch(err){
            console.log(err)
        }
    }
    static contactview = async(req,res)=>{
        try{
            const result = await contactModel.find()
            res.render('admin/contact/contactdisplay',{b:result})
        }
        catch(err){
             console.log(err)
        }
    }
}

module.exports=ContactController