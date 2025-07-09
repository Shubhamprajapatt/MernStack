const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const UserAuthRoutes=require("./routes/UserAuthRoutes.js")
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


//step-4 Database connectivity
const dbconnection=require("./config/dbconnection.js")
dbconnection();

//step-5 Mount your routes here 

app.use("/auth/api/v1",UserAuthRoutes)

//step-6 make demo page to show on the UI
app.get("/",(req,res)=>{
    res.send("this is authentication page")
})



