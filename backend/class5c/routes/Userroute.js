const express=require("express");
const router=express.Router();
const Usercontroler=require("../controlers/Usercontroler.js")
const Logincontroler=require("../controlers/Logincontroler.js")
const ALLStudent=require("../controlers/ALLStudent.js");
const Verifyuser = require("../middlewares/Verifyuser.js");
const Studentmiddleware = require("../middlewares/Studentmiddleware.js");

router.post("/user",Usercontroler);
router.get("/login",Logincontroler);
router.get("/allstudent",Verifyuser,Studentmiddleware,ALLStudent);
module.exports=router;