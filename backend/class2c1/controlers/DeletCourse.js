 const Course=require("../model/Course.js")
 async function DeletCourse(req,res){

    try {
        const { id } = req.params
      
        const response = await Course.findByIdAndDelete(id);
        console.log(response)
        console.log("course name", response.coursename)
        res.status(201).json({
            message: "Course deleted successfully",
            data: response
        })

    }
    catch (error) {
        console.log("we are getting an error ", error);
        res.status(500).json({
            message: "Something has wrongs",
            error: error
        })
    }
}
module.exports=DeletCourse;