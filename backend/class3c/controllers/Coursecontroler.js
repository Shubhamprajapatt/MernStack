const Course=require("../models/Course.js")
async function Coursecontroler(req,res) {
    
    try{
        const {coursename,courseincome,coursedicsription}=req.body;
        if(coursename===" " && coursedicsription===" " ){
            res.status(400).json({
                message:"coursename and coursedicsription are not empty"
            })
        }
        const ress=await Course.create({coursename,courseincome,coursedicsription});
        res.status(200).json({
            message:"Course Created sucessfully",
            data:ress
        })
    }
    catch(err){
        console.log("Error ",err);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }
}
module.exports=Coursecontroler;