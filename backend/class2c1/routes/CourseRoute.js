const express=require("express");
const router=express.Router();
const CreateCourse=require("../controlers/CreateCourse.js");
const AllCourse=require("../controlers/AllCourse.js");
const SingleCourse=require("../controlers/SingleCourse.js");
const UpdateCourse=require("../controlers/UpdateCourse.js");
const DeletCourse=require("../controlers/DeletCourse.js")
  

router.post("/create-course",CreateCourse);
router.get("/all-course",AllCourse)
router.get("/single-course",SingleCourse);
router.put("/update-course/:id",UpdateCourse);
router.delete("/delete-single-course/:id",DeletCourse)
module.exports=router;  