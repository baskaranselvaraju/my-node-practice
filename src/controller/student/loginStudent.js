import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../../models/student.js";

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // compare request password with db password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({id:student._id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // token valid for 1 day or 7 or 30 days as per requirement
    });

    // Remove password safely (rename variable to avoid redeclaration)
    const { password: _, ...studentData } = student._doc;
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
        data: studentData,
      });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default loginStudent;
