import jwt from "jsonwebtoken";
import Student from "../models/student.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // ✅ Try from cookies first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // ✅ Or try from Authorization header
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach student (without password)
    req.student = await Student.findById(decoded.id).select("-password");

    if (!req.student) {
      return res.status(401).json({ message: "Student not found" });
    }

    next();
  } catch (error) {
    console.error("❌ JWT verification failed:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;
