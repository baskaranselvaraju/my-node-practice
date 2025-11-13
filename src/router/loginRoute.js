import express from "express";
import loginStudent from "../controller/student/loginStudent.js";
import logoutStudent from "../controller/student/logoutStudent.js";

const router = express.Router();

router.post("/login", loginStudent);
router.post("/logout", logoutStudent);

export default router;