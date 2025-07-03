const Course = require("../model/Course.js");

async function UpdateCourse(req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(id, updateData, {
      new: true, // return the updated document
    });

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Update successful",
      data: updatedCourse,
    });
  } catch (err) {
    console.log("we are getting error", err);
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}

module.exports = UpdateCourse;
