const mongoose=require("mongoose");
const Coursechema=new mongoose.Schema({
 coursename:{type:"string",required:true},
 courseduration:{type:Number,required:true},
 courseauthor:{type:"string",required:true},
 courserating:{type:Number,required:true},
})
module.exports=mongoose.model("Course",Coursechema);