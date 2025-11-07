import express from "express";
import createRoom from "../controller/room/createroom.js";
import getRoom from "../controller/room/getRoom.js";
import updateRoom from "../controller/room/updateRoom.js";
import deleteRooms from "../controller/room/deleteRooms.js";
const router = express.Router();

// POST /api/room/v1/create
router.post("/create", createRoom);
router.get("/getroom", getRoom);
router.put("/updateroom/:id", updateRoom);
router.delete("/deleteroom/:id", deleteRooms);
export default router;
