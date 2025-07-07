const User=require("../models/Usermodel.js")
async function ALLStudent(req,res){
    try{
       const isExist=await User.find({});
     return res.status(200).json({
        messaage:"All Data Fetch Sucessfully",
        data:isExist
     })
     }
    catch(err){
        console.log("dost error a gyi hai",err);
        res.status(500).json({
            message:"internal server error"
        })
        
    }
}
module.exports=ALLStudent;