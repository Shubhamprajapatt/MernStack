const express=require("express");
const router=express.Router();
const Login=require("../controlers/Login.js");
const Singup = require("../controlers/Signup.js");
const VerifyAccount=require("../controlers/VerifyAccount.js")
const ResetPassword=require("../controlers/ResetPassword.js")
const ResendOtp=require("../controlers/ResendOtp.js")


router.post("/signup",Singup);
router.post("/login",Login);
router.post("/verify-account",VerifyAccount)
router.post("/reset-password",ResetPassword)
router.post("/resend-otp",ResendOtp)
module.exports=router;
