import mongoose from "mongoose";
import employee from "./employee.js";

const bookschema = new mongoose.Schema({
  bookname: { type: String, required: true },
  authorname: { type: String, required: true },
  publishdate: { type: Date, required: true },
  category: { type: String, default: "general" },
  language: { type: String, default: "english" },
  description: { type: String },
  isbn: { type: String, required: true },
  totalcopies: { type: Number, required: true },
  availablecopies: { type: Number, required: true },
  status: { type: String, default: "available" },
  date: { type: Date, required: true },
  // price : {type: number, default:150},
  addedby: {
    type: mongoose.Schema.ObjectId,
    ref: employee
  },
  updatedby: {
    editeddate: { type: Date },
    editedby: { type: mongoose.Schema.ObjectId, ref: employee }
  }
});

const Books = mongoose.model("books", bookschema);

export default Books;
