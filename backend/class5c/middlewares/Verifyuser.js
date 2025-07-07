const jwt=require("jsonwebtoken")
require("dotenv").config();
async function Verifyuser(req,res,next) {
    try{
        const token=req.body.token;
        if(!token){
            return res.status(400).json({
                message:"Token Not Found",
                status:false,
            })} 
        
        const decod=jwt.verify(token,process.env.JWTSECRECT);
        console.log("Decode Data",decod);
        if(!decod){
            return res.status(404).json({
                message:"token not correct",
                status:false,
            })
        }
        req.User=decod;
        next();    
    }
         catch(err){
     console.log(err);
        res.status(500).json({
            message:"Token got expired",
            sucsess:false,
        })
}
}
module.exports=Verifyuser