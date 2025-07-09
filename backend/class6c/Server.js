const express=require("express");
const Database = require("./config/Database.js");
require("dotenv").config()
const Studentsroute=require("./routes/Studentsroute.js");
const cookieParser = require("cookie-parser");
// const nodemailer=require("nodemailer")
// const crypto=require("crypto")

const app=express();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})
// Database conection
Database();

app.use(cookieParser())
// 
app.use(express.json())

// router ko use kr liya 
app.use("/studentdata",Studentsroute);


app.use("/",(req,res)=>{
    res.send("Home ")
})


// Nodemailer implement email functionality
// // step1 
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure:true, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EPASS
//   },
//   tls:{
//     rejectUnauthorized:false,
//   },
// });
// function sentemail(to,subject,msg){
//     transporter.sendMail({
//         from:process.env.EMAIL,
//         to:to,
//         subject:subject,
//         text:msg
//     }).then((res=>console.log("response",res)
// )).
// catch((e)=>{
// console.log("erroer a gyi hai",e);

//     })
// }
// sentemail("shubham.prajapat2020@sait.ac.in","mail testing","Keso ho dost")

// OTP Genrater 
// step-1 install crypto
// step-2 import crypto
// function OTPSEND(){
//     return crypto.randomInt(1000,9999).toString();
// }
// console.log("Otp is Generated",OTPSEND());
