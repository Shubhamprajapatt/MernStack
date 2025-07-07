const mongoose=require("mongoose")
const Placementschema=new mongoose.Schema({
    companyName:{type:String,require:true},
    companyLocation:{type:String,maxLength:50},
    companyCtC:{type:Number,require:true}
})
 module.exports=mongoose.model("Placement",Placementschema)