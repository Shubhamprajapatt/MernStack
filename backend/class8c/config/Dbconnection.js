const mongoose=require("mongoose");
require("dotenv").config();
function Dbconnection(){
  try {
        mongoose.connect(process.env.DBURL, {}).
            then(() => console.log("DB Conncetion done")).catch(e => {
                console.log("Error occuered",e)
            })

    }
    catch (error) {
        console.log("Database connection failed")
        process.exit(1);
    }
  }
module.exports=Dbconnection;