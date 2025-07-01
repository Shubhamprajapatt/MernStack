const express=require("express");
const router=express.Router();
const {Createuser}=reqiure("../controler/Createuser.js");
router.post("/create-user",Createuser);
module.exports=router;