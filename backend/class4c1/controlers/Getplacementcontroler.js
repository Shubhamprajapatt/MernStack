const Placement=require("../models/Placement.js");
async function Getplacementcontroler(req,res){
   try{
    
   const ress=await Placement.find().sort({companyName:-1})
   res.status(200).json({
    message:"Placement read sucessfully ",
    data:ress
   })
   }
   catch(err){
    console.log("you are getting error",err);
    res.status(500).json({
        message:"Internal Server Error"
    })
    
   }
}
module.exports=Getplacementcontroler;