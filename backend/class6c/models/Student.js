const mongoose=require("mongoose")
const Studentschema=new mongoose.Schema({
    fname:{type:String,require:true,maxlength:25},
    lname:{type:String,require:true,maxlength:25},
    email:{type:String,require:true},
    password:{type:String,require:true},
    verifyuser:{type:Boolean,default:false},
    role:{type:String,
        enum:['student','teacher'],
        default:'student'
    },
})
module.exports=mongoose.model("Student",Studentschema);