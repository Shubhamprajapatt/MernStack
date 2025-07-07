const bcrypt=require("bcrypt")
const User=require("../models/Usermodel.js")
async function Usercontroler(req,res){
    try{
        const {FName,LName,UserEmail,UserPassword,Userage,role}=req.body;
        console.log("here data :-",FName,LName,UserEmail,UserPassword,Userage);
        if(FName===" "&& LName==="" &&UserEmail===""){
            return res.status(200).json({
                message:"Fname ,lname and email empty nhi ho skta hai"
            })
        }
        const isExist=await User.findOne({UserEmail})
        if(isExist){
          return res.status(201).json({
            message:`this email ${UserEmail}is alreday register`
          })
        }
        // hash the password
        let encryptpassword;
        try{
         encryptpassword=await bcrypt.hash(UserPassword,10);
        }
        catch(err){
        res.status(400).json({
            message:"getting an error while encrypting the password",
            success:false
        })

        }
        
        const resa=await User.create({FName,LName,UserEmail,UserPassword:encryptpassword,Userage,role});
        res.status(200).json({
            message:"Account Created Sucessfully",
            data:resa
        })
    }
    catch(err){
        console.log("your are getting error",err);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }
}
module.exports=Usercontroler;