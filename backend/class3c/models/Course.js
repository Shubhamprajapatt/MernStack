const mongoose=require("mongoose")
const courseschema=new mongoose.Schema({
    coursename:{type:String,maxLength:50},
    courseincome:{type:Number,rmaxLength:50},
    coursedicsription:{type:String,maxLength:100},
})
module.exports=mongoose.model("Course",courseschema)