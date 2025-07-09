function CreateCourse(req,res){
  console.log("we are at Createcourse controler")
try{

    const courseData = {
  courses: [
    {
      name: "JavaScript for Beginners",
      price: 49.99,
      author: "John Doe"
    },
    {
      name: "Advanced Python",
      price: 59.99,
      author: "Jane Smith"
    },
    {
      name: "React and Redux",
      price: 69.99,
      author: "Emily Johnson"
    }
  ]
};
return res.status(200).json({
    message:"All Created course",
    data:courseData,
    success:true
})

}

catch(err){
    console.log("Error in Course controller",err)
    res.send(500).json({
        message:"Internal sever errorr in course controler",
        success:false
    })
}
}
module.exports=CreateCourse;