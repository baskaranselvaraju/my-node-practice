import mongoose from "mongoose";

// Schema – defines the structure of employee documents
const employeeschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateofjoining: { type: Date, default: new Date() },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  salary: { type: Number },
  role: { type: String, default: "employee" }
}, 
{
  timestamps: true  // automatically adds createdAt and updatedAt
});

// Model – creates a new collection in the database
const employee = mongoose.model("Employee", employeeschema);

export default employee;
