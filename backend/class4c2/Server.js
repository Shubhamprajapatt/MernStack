const express=require("express")
require("dotenv").config();
const database=require("./config/database.js")
const Userroute=require("./routes/Userroute.js")

const app=express();
const port=process.env.PORT;
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
    
})
database();

app.use(express.json())

app.use("/userdata",Userroute)

app.get("/",(req,res)=>{
    res.send("ho gya statrt")
})