import express from "express";
import Student from "../../models/student.js";

const getStudent = async (req, res) => {
  try {
    const student = await Student.find().select("-password");

    if (student.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No user found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student data recieved successfully",
      data: student,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default getStudent;
