const Users = require("../models/Users.js");
require("dotenv").config();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res.status(400).json({
        message: "you have to fill the all data is not allowed,Login controler",
        success: false,
      });
    }
    const isuserExist = await Users.findOne({ email });
    if (!isuserExist) {
      return res.status(404).json({
        message: `Your email is ${email} not registered in our website`,
        success: false,
      });
    }

    if(isuserExist.verifyUser=== false){
        return res.status(404).json({
            message:"Please verify your account before login",
            success:false,
        })
    }
    if(await bcrypt.compare(password,isuserExist.password)){
        const payload={
            email:isuserExist.email,
            role:isuserExist.role,
            id:isuserExist._id
        }
        const token=jwt.sign(payload,process.env.JWKSCRECT,{expiresIn:"1hr"})
        return res.cookie("Session", token).status(200).json({
                message: "Login successfully",
                success: true,
                data: isuserExist
            })
    }
    else{
        return res.status(400).json({
            message:"You have entered galat password,please enter correct one",
            success:false,
        })
    }
  } catch (err) {
    console.log("error in login controler", err);
    return res.status(500).json({
      message: "Internal Server in Login Controler",
      success: false,
    });
  }
}
module.exports = Login;
