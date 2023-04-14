class AdminController{
    static dashboard=(req,res)=>{
        // res.send('hello home')
        try{
        const{name,email}=req.admin
        res.render('admin/dashboard',{n:name,e:email})
    }catch(error){
        console.log(error);
    }
  }
}
module.exports=AdminController 