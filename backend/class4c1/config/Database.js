const mongoose=require("mongoose")
require("dotenv").config()
function Database(){
 mongoose.connect(process.env.DBURL,{}).
 then(res=>console.log("Database connected Sucessfully")).
 catch(err=>console.log("error",err))
}
module.exports=Database;