const express=require("express")
const router=express.Router();
const Signup=require("../controlers/Signup.js")
const Login=require("../controlers/Login.js")
const EnrollCourses=require("../controlers/EnrollCourses.js")
const CreateCourse=require("../controlers/CreateCourse.js")
const VerifyUser=require("../middleware/VerifyUser.js")
const Teachermiddilware=require("../middleware/Teachermiddilware.js")
const Studentmiddilware=require("../middleware/Studentmiddilware.js")

router.post("/singup",Signup)
router.get("/login",Login)
router.get("/enroll-course",VerifyUser,Studentmiddilware,EnrollCourses)
router.get("/Create-course",VerifyUser,Teachermiddilware,CreateCourse)
module.exports=router;

