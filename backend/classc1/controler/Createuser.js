const Student =require("../model/Student.js");
 exports.Createuser= async(req,res)=>{
    try{
    console.log("ME controler m hun");
    const {firstname,age,email}=req.body;
    const status=await Student.create({name,age,email})
    console.log(firstname,age,email);
    
    res.status(201).json({
        message:"Sucessful created"
    })
 }catch(err){
    console.log("error a gyi dost")
 }
}