const express=require("express");
require("dotenv").config()
const dbconnection=require("./config/DbConnect.js")
const Studentroute=require("./routes/Studentroute.js")
const Courseroute=require("./routes/Courseroute.js")
const Incomeroute=require("./routes/Incomeroute.js")


const app=express();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
// Middilware
app.use(express.json())

//link karo route ko 
app.use("/student",Studentroute)
app.use("/course",Courseroute)
app.use("/income",Incomeroute)



app.get("/",(req,res)=>{
    res.send("server chl gya hai dost y")
})
dbconnection();