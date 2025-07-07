const express=require("express");
const router=express.Router();
const UserControler=require("../controlers/UserContoler.js")
const deletecontroler=require("../controlers/deletecontroler.js")
const Logincontroler=require("../controlers/Logincontroler.js")

router.post("/user",UserControler);
router.delete("/delet-karo/:id",deletecontroler);
router.get("/login",Logincontroler);
module.exports=router;