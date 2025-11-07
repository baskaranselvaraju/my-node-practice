import express from "express";
import Room from "../../models/room.js";
import mongoose from "mongoose";

const deleteRooms = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    let deleteResult;
    if (mongoose.Types.ObjectId.isValid(id)) {
       deleteResult = await Room.findByIdAndDelete(id);
    } else {
       deleteResult = await Room.findOneAndDelete({ roomno:Number(id) });
    }
    if (!deleteResult) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({
      message: "Rooms deleted successfully",
      deleteResult: deleteResult,
    });
  } catch (error) {
    console.error("Error deleting rooms:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export default deleteRooms;
