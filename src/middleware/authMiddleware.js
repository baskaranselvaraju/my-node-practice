import jwt from "jsonwebtoken";
import Student from "../models/student.js";
import employee from "../models/employee.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // Try from cookies first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // Or try from Authorization header
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

    let user;
    if (decoded.role === "student") {
      user = await Student.findById(decoded.id).select("-password");
    } else if (decoded.role === "employee") {
      user = await employee.findById(decoded.id).select("-password");
    } else {
      return res.status(401).json({ success: false, message: "Invalid user role" });
    }

     if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    req.user = user;        // user document (without password)
    req.user.role = decoded.role; // attach role
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;
