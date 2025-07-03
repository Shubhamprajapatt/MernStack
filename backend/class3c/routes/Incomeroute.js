const express=require("express")
const router=express.Router()
const Incomecontroler=require("../controllers/Incomecontroler.js");

router.post("/Income-create",Incomecontroler);
module.exports=router;