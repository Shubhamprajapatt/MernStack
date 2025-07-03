const mongoose=require("mongoose")
const incomeschema=new mongoose.Schema({
    inncome:{type:Number},
    incomeDepartment:{type:String,rmaxLength:50},
})
module.exports=mongoose.model("Income",incomeschema)