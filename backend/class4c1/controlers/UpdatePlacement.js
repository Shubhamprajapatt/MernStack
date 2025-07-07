const Placement=require("../models/Placement.js");
  async function UpdatePlacement(req,res){
    try{
  const {id}=req.params;
  const {companyName}=req.body;
  const update=await Placement.findByIdAndUpdate(id,{companyName:companyName},{new:true})
  res.status(200).json({
    message:"Updated sucessfully",
    data:update
  })
    }
    catch(err){
        console.log("error a rhi h" ,err)
        res.status(500).json({
            message:"Internal Server error"
        })
    }
  }
  module.exports=UpdatePlacement;