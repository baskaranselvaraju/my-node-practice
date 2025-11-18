import express from "express";
import employee from "../../models/employee.js";

const updateEmployee = async (req, res) => {
  try {
    const { name, email, password, phoneno, dateofjoining, salary, role } =
      req.body;
    const { id } = req.params;

    console.log(id);
    if (!name || !email || !password || !phoneno) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newData = {
      name,
      email,
      password,
      phoneno,
      dateofjoining,
      salary,
      role,
    };
    const data = await employee.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ message: "Employee updated successfully", data: data });
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default updateEmployee;
