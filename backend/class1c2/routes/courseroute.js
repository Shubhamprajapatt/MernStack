//step- 1 import express
const express =require("express");
const {createcourse}=require("../controler/CourseControler.js");

//routes define karne hai but uske leaye hame router chaheaye 
const router=express.Router();

//define your paths 
router.post("/create-course",createcourse);
module.exports=router;