const Student=require("../models/Student.js")
async function CreateStudent(req,res){
    try{
        const {studentname,studentdiscription,studentage}=req.body;
        if(studentname===" "  && studentdiscription===" "){
            res.status(400).json({
                message:"studentname and studentdiscription are not empty"
            })
        }
        // insert record in db
        const dbres=await Student.create({studentname,studentdiscription,studentage});
        res.status(200).json({
            message:"student register sucessfully",
            data:dbres
        })
    }
    catch(err){
        console.log("error",err);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }
}
module.exports=CreateStudent;