const Course =require("../Models/Course.js");

//write your business Logic
exports.createcourse=async(req,res)=>{
    try{
        const {courseName,Courseduration}=req.body;
          console.log(courseName,Courseduration);
            // modal create kar do 
          const course=await Course.create({courseName,Courseduration});
          res.status(201).json({
            message:"course create succesfully",
            data:course
          })
    } catch(error){
        res.status(500).json({
            message:"ab nhi chl raaha error a gyi hai ",
            error:error
        })
    }
  
    
}