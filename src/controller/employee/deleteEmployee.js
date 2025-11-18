import express from "express";
import employee from "../../models/employee.js";

const deleteEmployee = async (req, res) => {
  try {

    const{id}=req.params;

    const deletedata = await employee.findByIdAndDelete(id);

    if (!deletedata) {
      return res.status(400).json({
        success: true,
        message: "Inavlid id or data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee data delete successfully",
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default deleteEmployee;
