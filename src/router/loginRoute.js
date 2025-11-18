import express from "express";
import loginStudent from "../controller/login/loginStudent.js";
import logoutStudent from "../controller/login/logoutStudent.js";

const router = express.Router();

router.post("/login", loginStudent);
router.post("/logout", logoutStudent);

export default router;