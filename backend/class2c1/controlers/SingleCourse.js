 const Course=require("../model/Course.js")
 async function SingleCourse(req,res){
 try{
    const {id}=req.body
        const res1=await Course.findById(id);
        console.log(res1)
        console.log("Course name is ",response.courseName)
           res.status(201).json({
             message:"course Created ",
             data:res1
           })
     }catch(err){
         console.log("geeting error",err);
         res.status(500).json({
             message: "Something has wrongs",
             error:err
         })
         
     }
}
module.exports=SingleCourse;