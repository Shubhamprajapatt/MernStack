const Student = require("../models/Student.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function Login(req,res) {
  try {
    const { email, password } = req.body;

    let isuser = await Student.findOne({ email });
    if (isuser === null || isuser === undefined) {
      res.status(200).json({
        message: "This USers ${email} is not registerd ",
        success: false,
      });
    }
    if(await bcrypt.compare(password, isuser.password)) {
      const payload = {
        id: isuser._id,
        role: isuser.role,
        email: isuser.email,
      };
      const token = jwt.sign(payload, process.env.JWTCECRET, {
        expiresIn: "330s"});
        isuser=isuser.toObject();
      isuser.token = token;
      isuser.password = null;

      res.cookie("session", token).status(200).json({
        message: "User login succesfully",
        data: isuser,
        success: true,
      });
    } else {
      res.status(200).json({
        message: "please enter password",
        success: false,
      });
    }
  } catch (err) {
    console.log("Login ke catch block me error a gyi hai ", err);
    res.status(500).json({
      message: "Internal Server in Singup Contoler",
      success: false,
    });
  }
}

module.exports = Login;
