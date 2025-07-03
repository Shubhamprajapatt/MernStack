const Course=require("../model/Course.js")
async function AllCourse(req,res){
 try{
    const res1=await Course.find();
    res.status(201).json({
        message:"Single course feteched sucessfully",
        data:res1
    })
 }
 catch(err){
    console.log(" we are getting erroe",err);
    res.status(500).json({
        mesaage:"Sommething goes wrong",
        error:err
    })
 }
}
module.exports=AllCourse;