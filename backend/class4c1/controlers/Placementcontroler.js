const express = require("express");
const Placement=require("../models/Placement.js");
async function Placementcontroler(req,res){
   try{
    const {companyName,companyLocation,companyCtC}=req.body;
   const ress=await Placement.create({companyName,companyLocation,companyCtC})
   if(companyName==="" && companyLocation===""){
    res.status(201).json({
        message:"com"
    })
   }

   res.status(200).json({
    message:"Placement created sucessfully ",
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
module.exports=Placementcontroler;