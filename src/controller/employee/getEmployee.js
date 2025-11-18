import express from "express";
import employee from "../../models/employee.js";

const getEmployee = async (req, res) => {
  try {

    const data = await employee.find().select("-password");

    if (data.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No user found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee data recieved successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default getEmployee;
