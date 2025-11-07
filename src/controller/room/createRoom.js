import express from "express";
import Room from "../../models/room.js";

const createRoom = async (req, res) => {
  try {
    const { floor, roomtype, roomno, capacity, rent } = req.body;
    // Validate required fields
    if (!floor || !roomno || !capacity || !rent) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingRoom = await Room.findOne({ roomno, floor });
    if (existingRoom) {
      return res
        .status(400)
        .json({ message: "Room number already exists on this floor" });
    }
    const newRoom = new Room({
      floor,
      roomtype,
      roomno,
      capacity,
      rent,
    });
    await newRoom.save();
    res
      .status(201)
      .json({ message: "Room created successfully", room: newRoom });
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export default createRoom;
