const mongoose=require("mongoose")
const studentschema=new mongoose.Schema({
    studentname:{type:String,maxLength:50},
    studentdiscription:{type:String,maxLength:50},
    studentage:{type:Number,maxLength:100},
})
module.exports=mongoose.model("Student",studentschema)