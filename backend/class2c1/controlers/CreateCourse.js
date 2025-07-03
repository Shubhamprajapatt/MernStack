const Course=require("../model/Course.js")
 async function CreateCourse(req,res){
    try{
        const {coursename,courseduration,courseauthor,courserating}=req.body
        const res1= await Course.create({coursename,courseduration,courseauthor,courserating})
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
module.exports=CreateCourse;