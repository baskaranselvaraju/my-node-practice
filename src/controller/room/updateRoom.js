import express from "express";
import Room from "../../models/room.js";
const updateRoom = async (req, res) => {
  try {
    const { floor, roomtype, roomno, capacity, rent } = req.body;
    const { id } = req.params;

    console.log(id);
    if (!floor || !roomno || !capacity || !rent) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newData = {
      floor,
      roomtype,
      roomno,
      capacity,
      rent,
    };
    const updatedRoom = await Room.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res
      .status(200)
      .json({ message: "Room updated successfully", room: updatedRoom });
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default updateRoom;
