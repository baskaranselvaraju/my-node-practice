import express from "express";
import protect from "../middleware/authMiddleware.js";
import createBook from "../controller/book/createBook.js";
import getbook from "../controller/book/getBook.js";
import updateBook from "../controller/book/updateBook.js";
import deleteBook from "../controller/book/deleteBook.js"

const router = express.Router();

router.post("/createbook",protect, createBook);
router.get("/getbook", protect,getbook);
router.put("/updatebook/:id",protect, updateBook);
router.delete("/deletebook/:id",protect,deleteBook);

export default router;
