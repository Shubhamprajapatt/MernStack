const mongoose=require("mongoose")
const Userschema=new mongoose.Schema({
    FName:{type:String,required:true},
    LName:{type:String,required:true},
    UserEmail:{type:String,required:true},
    UserPassword:{type:String,required:true},
     Userage:{type:Number,required:true},
     role:{type:String,required:true}

})
module.exports=mongoose.model("User",Userschema)