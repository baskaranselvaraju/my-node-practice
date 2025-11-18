import express from "express";
import protect from "../middleware/authMiddleware.js";
import getEmployee from "../controller/employee/getEmployee.js";
import updateEmployee from "../controller/employee/updateEmployee.js";
import deleteEmployee from "../controller/employee/deleteEmployee.js";
import createEmployee from "../controller/employee/createEmployee.js";


const router = express.Router();

router.post("/createemployee",protect, createEmployee);
router.get("/getemployee", protect,getEmployee);

router.put("/updateemployee/:id",protect, updateEmployee);
router.delete("/deleteemployee/:id",protect,deleteEmployee);

export default router;
