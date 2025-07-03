const mongoose=require("mongoose")
require("dotenv").config()
function dbconnection(){
 mongoose.connect(process.env.DBURL,{}).
 then(res=>console.log("Database connection done")).
 catch(err=>console.log("error",err))
}
module.exports=dbconnection;