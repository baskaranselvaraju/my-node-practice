import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneno: { type: Number, required: true },
  dept: { type: String, required: true }, // mantatory
  bloodgroup:{ type: String}, // optional
  limit:{ type: Number, default:3}, // frontend(5) or empty (3)

});

const Student = mongoose.model("Student", studentSchema);

export default Student;

