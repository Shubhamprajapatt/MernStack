const Income=require("../models/Income.js")
async function Incomecontroler(req,res){
    try{
        const {inncome,incomeDepartment}=req.body;
        const responce=await Income.create({inncome,incomeDepartment});
        res.status(200).json({
            message:"Income Created sucessfully",
            data:responce
        })
    }
    catch(err){
        console.log("error a gyi hai dost",err);
        res.status(500).json({
            message:"Internal server error"
        })
        
    }
}
module.exports=Incomecontroler;