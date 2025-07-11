const mongoose=require("mongoose")
const Courseschema=new mongoose.Schema({
    CName: { type: String, required: true},
    Cdiscription: { type: String },
    CPrice: { type: String, required: true },
})
module.exports=mongoose.model("Course",Courseschema);