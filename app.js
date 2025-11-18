import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConfig.js";
import std from "./src/router/studentRoute.js";
import movieRouter from "./src/router/movieRoute.js";
import roomRouter from "./src/router/roomRoute.js";
import bookRouter from "./src/router/bookRoute.js"
import employeeRouter from "./src/router/employeeRoute.js"
import loginRouter from "./src/router/loginRoute.js"
import cookieParser from "cookie-parser";
import helmet from 'helmet'

dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use("/api/student/v1", std);
app.use("/api/employee/v1", employeeRouter);
app.use("/api/book/v1", bookRouter);
app.use("/api/login/v1", loginRouter);

app.use("/api/movie/v1", movieRouter);

app.use("/api/rooms/v1",roomRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
