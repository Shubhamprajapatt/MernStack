const User=require("../models/Usermodel.js")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
require("dotenv").config();

async function Logincontroler(req,res){
    try{
        const {UserEmail,UserPassword}=req.body;
        console.log("email,password",UserEmail,UserPassword);
        
        if(UserEmail===""&& UserPassword===""){
            return res.status(200).json({
                message:"Email and Password empty nhi ho sakta"
            })
        }
      let isExist=await User.findOne({UserEmail})
      console.log("Found user data ",UserEmail);
      
        if(!isExist){
            return res.status(200).json({
                message:"User nhi hai website mai "
            })
        }

        console.log("data",await bcrypt.compare(UserPassword,isExist.UserPassword))
     if(await bcrypt.compare(UserPassword,isExist.UserPassword)){

        // token ko use krna hai aya
        // step1
        const payload={
            id:isExist._id,
            UserEmail:isExist.UserEmail,
            role:isExist.role
        }

        isExist=isExist.toObject();
        isExist.UserPassword=null;
        //  Step2 Genrate token
        const token=jwt.sign(payload,process.env.JWTSECRECT,{expiresIn:"40s"})
        console.log("we genrated token",token)
        isExist.token=token

    //  return res.status(200).json({
    //     messaage:"User Login Sucessfully",
    //     data:isExist
    //  })
    return res.cookie("user",token).status(200).json({
        messaage:"User Login Sucessfully",
        data:isExist
     })
    }
    else{
        res.status(400).json({
            messaage:"Please Enter correct password",
            success:false
        })}
    }
    catch(err){
        console.log("dost error a gyi hai",err);
        res.status(500).json({
            message:"internal server error"
        })
        
    }
}
module.exports=Logincontroler;