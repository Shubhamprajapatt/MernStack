const express = require("express");
const { default: mongoose } = require("mongoose");
const { Createuser } = require("./controler/Createuser");

const app=express();

const port=4500;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
    
})
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>helooo dostoo</h1>");

})

mongoose.connect("mongodb://localhost:27017/student",{}).then(()=>{
    console.log("mera database connected sucessfullly");
    
}).catch((err)=>{
    console.log("error a gyoi dost",err);
})
app.use("/student",Createuser);