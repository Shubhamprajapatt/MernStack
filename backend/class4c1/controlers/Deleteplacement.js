const Placement=require("../models/Placement.js");

async function Deleteplacement(req,res){
    try {
       
    const {id}=req.params;
    const myid=await Placement.findByIdAndDelete({_id:id});
    res.status(201).json({
      message:"Delete placement  by id sucessfully",
      data:myid
    })
      
      } catch (err) {
        console.log("we are getting error", err);
        res.status(500).json({
          message: "Something went wrong",
          error: err.message,
        });
      }
}
module.exports=Deleteplacement;