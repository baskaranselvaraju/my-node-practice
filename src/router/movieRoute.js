import express from "express";
import createMovie from "../controller/movie/createMovie.js";

const router = express.Router();

router.post("/create", createMovie);

export default router;
