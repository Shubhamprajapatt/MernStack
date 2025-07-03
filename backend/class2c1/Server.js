const express=require("express");
require("dotenv").config();
const Databaseconnection=require("./config/Databaseconnection.js");
const CourseRoute=require("./routes/CourseRoute.js");


//step-2 instance creation of express application
const app=express();

//step-3 Server start
const port=process.env.PORT||4000; 
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    
})
// for geeting the data from body
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>ye class 3  backend ki hai</h1>");
})

Databaseconnection();
app.use("/api/course/v1", CourseRoute)


