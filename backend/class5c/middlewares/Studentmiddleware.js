const jwt=require("jsonwebtoken")
require("dotenv").config()
async function Studentmiddleware(req,res,next){
    try{
  const role=req.User.role;
  if(role==="student"){
    next()
  }
  else{
    return res.status(404).json({
        message:"You are not allowed to access",
        success:false,
    })
  }
    }
    catch(err){
   return res.status(500).json({
        message:"nikal jao ",
        success:false,
    })
    }
}
module.exports=Studentmiddleware;