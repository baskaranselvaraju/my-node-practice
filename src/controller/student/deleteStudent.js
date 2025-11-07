import express from "express";
import Student from "../../models/student.js";

const deleteStudent = async (req, res) => {
  try {

    const{id}=req.params;

    const deletedata = await Student.findByIdAndDelete(id);

    if (!deletedata) {
      return res.status(400).json({
        success: true,
        message: "Inavlid id or data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student data delete successfully",
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default deleteStudent;
