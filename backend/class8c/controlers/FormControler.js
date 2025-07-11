const Course=require("../models/User.js")
async function FromControler(req,res){
try{
    const {CName,Cdiscription,CPrice}=req.body;
    console.log("data is ",CName,Cdiscription,CPrice);
    const response=await Course.create({CName,Cdiscription,CPrice});
    res.status(201).json({
        message:"Course Created Successfully",
        data:response
    })
}
catch(err){
    console.log("Error in Fform Controler",err)
    res.status(400).json({
        message:"Internal server errror in Form Controler",
        success:false
    })
}
}
module.exports=FromControler