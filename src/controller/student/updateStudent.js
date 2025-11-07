import express from "express";
import Student from "../../models/student.js";
import bcrypt from "bcrypt";

const updateStudent = async (req, res) => {
  try {
    const { name, email, phoneno, dept, password,bloodgroup,limit } = req.body;
    const { id } = req.params;
    // validate required fields (optional but recommended)
    if (!name || !email || !phoneno || !dept || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const register = {
      name,
      email,
      password: hashPassword,
      phoneno,
      dept,
      bloodgroup,
      limit
    };

    const updateData = await Student.findByIdAndUpdate(id, register, {
      new: true,
      runValidators: true,
    });
    if (!updateData) return res.status(400).send("User not found.");

    res.status(200).json({
      success: true,
      message: "Student data updated successfully",
      data: updateData,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default updateStudent;
