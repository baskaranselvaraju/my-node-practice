import express from "express";
import createStudent from "../controller/student/createStudent.js";
import getStudent from "../controller/student/getStudent.js";
import updateStudent from "../controller/student/updateStudent.js";
import deleteStudent from "../controller/student/deleteStudent.js";
import loginStudent from "../controller/student/loginStudent.js";
import protect from "../middleware/authMiddleware.js";
import logoutStudent from "../controller/student/logoutStudent.js";

const router = express.Router();

// POST /api/student/v1/create
router.post("/create", createStudent);
router.get("/getstudent", protect,getStudent);

router.put("/updatestudent/:id", updateStudent);
router.delete("/deletestudent/:id",deleteStudent);

router.post("/login", loginStudent);
router.post("/logout", logoutStudent);

// Protected route example
router.get("/profile", protect, async (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    student: req.student,
  });
});

export default router;
