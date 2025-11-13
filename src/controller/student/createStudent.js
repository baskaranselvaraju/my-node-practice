import express from "express";
import bcrypt from "bcrypt";
import Student from "../../models/student.js";
import nodemailer from "nodemailer";
import generateToken from "../../util/generateToken.js";

const createStudent = async (req, res) => {
  try {
    const {
      name,
      registerno,
      email,
      phoneno,
      dept,
      password,
      bloodgroup,
      role,
      limit
    } = req.body;
    
    // validate required fields (optional but recommended)
    if (!name || !email || !phoneno || !dept || !password || !registerno) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingPhone = await Student.findOne({ phoneno });
    const existingEmail = await Student.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already registered" });
    } else if (existingPhone) {
      return res
        .status(400)
        .json({ message: "Phone Number already registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const register = new Student({
      name,
      registerno,
      email,
      password: hashPassword,
      phoneno,
      dept,
      bloodgroup,
      role,
      limit
    });

    await register.save();

    const token = generateToken(register._id);

    // Step 1: Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Step 2: Prepare email content
    const textMessage = `Hi ${name},\n\n\tThank you for registering your details.`;
    const htmlMessage = `<p>Hi ${name},</p><p>Thank you for registering your details.</p>`;

    // ✅ Step 3: Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for registering",
      text: textMessage,
      html: htmlMessage,
    });

    // ✅ Step 4: Send success response
    res.status(200).json({
      success: true,
      message: "Student created successfully and email sent",
      token,
      register,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default createStudent;
