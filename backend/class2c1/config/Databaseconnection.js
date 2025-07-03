const mongoose=require("mongoose");
require("dotenv").config();

function Databaseconnection(){
    try{
        mongoose.connect(process.env.database_url,{}).then(()=>{
            console.log("Database Connection establish");
             
            }).catch((err)=>{
                   console.log("database connection faild",err);
                   })
    }
    catch(err){
        console.log("we are geeting error",err);
        
    }
}
module.exports=Databaseconnection;