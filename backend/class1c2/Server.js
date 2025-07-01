const express = require("express");
const mongoose = require("mongoose")

const app=express();

 const port=3000;
 app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
 })
 app.get("/",(req,res)=>{
    res.send("<h1>hn dosto ye ban gya app</h1>")
 })                                                 


 //connect your database
 mongoose.connect("mongodb://localhost:27017/backend",{}).then(()=>{
    console.log("Database connect ho gya hai");
    }).catch((error)=>{
        console.log("error a gyi hai ",error);
        
    })
    app.use(express.json());

    const  courseroute =require("./routes/courseroute.js");
    app.use("/api/course/v1",courseroute);