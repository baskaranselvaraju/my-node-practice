import mongoose from "mongoose";
import books from "./books.js";
import payment from "./payment.js";

const complaintSchema = new mongoose.Schema({
  raisedby: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["maintenance", "books", "payments", "staff", "others"],
    required: true,
  },
  bookid: {
    type: mongoose.Schema.ObjectId,
    ref: books,
  },
  paymentid: {
    type: mongoose.Schema.ObjectId,
    ref: payment,
  },
  status: {
    type: String,
    enum: ["pending", "working", "solved"],
    default: "pending",
  },
  resolvedby: {
    type: mongoose.Schema.ObjectId,
  },
});

const complaint = mongoose.model("Complaint", complaintSchema);
export default complaint;
