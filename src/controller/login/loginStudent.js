import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../../models/student.js";
import employee from "../../models/employee.js";

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Try finding user in student collection
    let user = await Student.findOne({ email });
    let role = "student";

    if (!user) {
      // If not found, try employee collection
      user = await employee.findOne({ email });
      role = "employee";
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // compare request password with db password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "1d", // token valid for 1 day or 7 or 30 days as per requirement
    });

    // Remove password safely (rename variable to avoid redeclaration)
    const { password: _, ...userData } = user._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        token,
        data: userData,
      });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default loginStudent;

/* import student from "../models/student.js";
import employee from "../models/employee.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Try finding user in student collection
    let user = await student.findOne({ email });
    let role = "student";

    if (!user) {
      // If not found, try employee collection
      user = await employee.findOne({ email });
      role = "employee";
    }

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid Password" });
    }

    // Generate JWT with user id and role
    const token = jsonwebtoken.sign(
      { id: user._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // You can set token in cookie or send it in response
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      role,
      user: {
        id: user._id,
        email: user.email,
        name: user.name || "", // adjust fields as per your schema
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default login;
*/
