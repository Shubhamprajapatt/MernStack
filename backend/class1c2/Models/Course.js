// step-1 impport mongoose
const mongoose=require("mongoose")
//step-2 create schema
const courseschema=new mongoose.Schema({
    courseName:{type:String,require:true},
    courseduration:{type:Number,require:true}

})
module.exports=mongoose.model("Course",courseschema);