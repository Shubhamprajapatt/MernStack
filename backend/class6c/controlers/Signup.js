const Student = require("../models/Student.js");
const bcrypt=require("bcrypt")
async function Signup(req, res) {
  try {
    const { fname, lname, email, password, verifyuser, role } = req.body;
    // 
    const isuser = await Student.findOne({ email });
    if (isuser) {
      res.status(200).json({
        message: "This USers ${email} Alreday in database , enter other email id",
        data: isuser,
      });
    }
// password ko encrypt kardo
let passwordencrypt;
try{
    passwordencrypt=await bcrypt.hash(password,10);
}
catch(err){
   console.log("Password ko encrypt krne  me error a gyi hai ", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    }); 
}

const newuser=await Student.create({fname, lname, email, password:passwordencrypt, role });
res.status(200).json({
    message:"User Signup Successfully",
    data:newuser,
    success:true
})

  } catch (err) {
    console.log("Signup ke catch block me error a gyi hai ", err);
    res.status(500).json({
      message: "Internal Server in Singup Contoler",
      success: false,
    });
  }
}

module.exports=Signup;