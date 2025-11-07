import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  floor: { type: String, required: true },
  roomtype: { type: String, enum:['AC','NonAC'],required: true, default:'NonAC' },
  roomno: { type: Number, required:true },
  capacity: { type: Number, required: true },
  rent:{ type: Number, required: true }})
const Room = mongoose.model("Room", roomSchema);

export default Room;
