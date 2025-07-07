const express=require("express");
const Databse=require("./config/Database.js")
const Placementroute=require("./routes/Placementroute.js")
const Getplacementcontroler=require("./routes/Placementroute.js")
const GetById=require("./routes/Placementroute.js")
const app=express();
require("dotenv").config()
const port=(process.env.PORT)
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
    
})
//databse connection done
Databse();

//middliware to parse data
app.use(express.json())

//use router 
app.use("/placement",Placementroute)


app.get("/",(req,res)=>{
    res.send("server start ho gya hai")
})
