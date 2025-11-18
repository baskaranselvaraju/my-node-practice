import express from "express";
import employee from "../../models/employee.js";
import bcrypt from "bcrypt";
import generateToken from "../../util/generateToken.js";

const createEmployee = async (req, res) => {
  try {
    const { name, email, password, phoneno, salary, role } = req.body;

    if (!name || !email || !phoneno || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existing = await employee.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const data = new employee({
      name,
      email,
      password: hashPassword,
      phoneno,
      salary,
      role,
    });

    await data.save();
    const token = generateToken(data._id);
    res.status(200).json({
      success: true,
      message: "Employee created successfully",
      token,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default createEmployee;
