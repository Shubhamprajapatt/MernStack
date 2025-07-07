const express=require("express");
const router=express.Router();
const Placementcontroler=require("../controlers/Placementcontroler.js");
const Getplacementcontroler=require("../controlers/Getplacementcontroler.js");
const GetById=require("../controlers/GetById.js");
const UpdatePlacement=require("../controlers/UpdatePlacement.js");
const Deleteplacement = require("../controlers/Deleteplacement.js");

router.post("/placements-create",Placementcontroler)
router.get("/get-placement",Getplacementcontroler)
router.get("/getby-id/:id",GetById)
router.put("/update/:id",UpdatePlacement)
router.delete("/delete/:id",Deleteplacement)

module.exports=router;
