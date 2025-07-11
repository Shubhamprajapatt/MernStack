const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const FormRoute=require("./routes/FormRoute.js")
//step-1 instance create
const app = express();

const PORT = process.env.PORT || 4700
//step-2 start server
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

app.use(cookieParser()) 

//step-3 use middlewares to parse data from body
app.use(express.json())
app.use(express
    .urlencoded())


//step-4 Database connectivity
const Dbconnection=require("./config/Dbconnection.js")
Dbconnection();

//step-5 Mount your routes here 
app.use("/api/course",FormRoute)


//step-6 make demo page to show on the UI
app.get("/",(req,res)=>{
    res.send("this is authentication page")
})



