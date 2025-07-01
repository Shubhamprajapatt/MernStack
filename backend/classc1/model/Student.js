const { mongo } = require("mongoose");

const mongoose =require("mongoose");
const createstudent=new mongoose.Schema({

    firstname:{type:"string" ,required:true},
    age:{type:"Number" ,required:true},
    emial:{type:"string" ,required:true}

})
module.exports=mongoose.model("Student",createstudent);