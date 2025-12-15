import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/dbConfig.js";
import std from "./src/router/studentRoute.js";
import movieRouter from "./src/router/movieRoute.js";
import roomRouter from "./src/router/roomRoute.js";
import bookRouter from "./src/router/bookRoute.js";
import employeeRouter from "./src/router/employeeRoute.js";
import loginRouter from "./src/router/loginRoute.js";
import redisRouter from "./src/router/redisRouter.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import limiter from "./src/middleware/rateLimiter.js";
import { cache } from "./src/middleware/cache.js";


dotenv.config();
const app = express();

// Connect to DB
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(helmet()); // Basic security headers
app.use(limiter);  // Rate limiting

// Routes with caching
app.use("/api/student/v1", cache("student"), std);
app.use("/api/employee/v1", cache("employee"), employeeRouter);
app.use("/api/book/v1", cache("book"), bookRouter);
app.use("/api/movie/v1", cache("movie"), movieRouter);
app.use("/api/rooms/v1", cache("room"), roomRouter);

app.use("/api/cache",redisRouter);

// Routes without caching (login usually dynamic)
app.use("/api/login/v1", loginRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
