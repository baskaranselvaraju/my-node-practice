import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConfig.js";
import std from "./src/router/studentRoute.js";
import Student from "./src/models/student.js";
import movieRouter from "./src/router/movieRoute.js";
import Movie from "./src/models/movie.js";
import roomRouter from "./src/router/roomRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api/student/v1", std);

// app.get('/api/movie/v1', async (req, res) => {
//   const movie = await Movie.find();
//   res.json(movie);
// });
app.use("/api/movie/v1", movieRouter);

app.use("/api/rooms/v1",roomRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
