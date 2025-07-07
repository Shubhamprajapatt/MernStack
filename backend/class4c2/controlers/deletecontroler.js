const User=require("../models/Usermodel.js")
async function deletecontroler(req,res){
    try{
        const {id}=req.params;
        const sss=await User.findByIdAndDelete({_id:id});
        res.status(200).json({
            message:"Deleted  sucessfully",
            data:sss
        })

    }
    catch(err){
        console.log("error a gyi dost",err);
        res.status(500).json({
            message:"delet nhi ho raha hai dost"
        })
        
    }
}
module.exports=deletecontroler;