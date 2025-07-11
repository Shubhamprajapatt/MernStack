const express=require("express")
const router=express.Router()

const FromControler=require("../controlers/FormControler.js")
router.post("/Form-controler",FromControler)
module.exports=router;