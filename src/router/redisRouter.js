import express from "express";
import protect from "../middleware/authMiddleware.js";
import { getCachedKey, getCachedSpecificKey } from "../controller/rediscache/getCache.js";

const router = express.Router();

// GET all cached keys
router.get("/keys", protect, getCachedKey);

// GET cached value by key (use query string)
router.get("/", protect, getCachedSpecificKey);

export default router;
