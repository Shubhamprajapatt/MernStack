const express=require("express")
const router=express.Router()
const Coursecontroler=require("../controllers/Coursecontroler.js")

router.post("/course-create",Coursecontroler);
module.exports=router;
