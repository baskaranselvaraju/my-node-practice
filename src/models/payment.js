import mongoose from "mongoose";
import student from "./student.js";
import borrow from "./borrow.js";
import employee from "./employee.js";

const paymentschema = new mongoose.Schema({
  transactiontype: {
    type: String,
    enum: ["incoming", "outgoing"],
    required: true,
  },

  category: {
    type: String,
    enum: [
      "maintainace",
      "due",
      "lost",
      "due_lost",
      "books_purchase",
      "others",
    ],
    required: true,
  },

  amount: {
    type: String,
    required: true,
  },

  studentid: {
    type: mongoose.Schema.ObjectId,
    ref: student,
  },

  phone: {
    type: Number,
  },

  borrowid: {
    type: mongoose.Schema.ObjectId,
    ref: borrow,
  },

  paymentdate: {
    type: Date,
  },

  paymentstatus: {
    type: String,
    enum: ["paid", "unpaid"],
  },

  paymentMode: {
    type: String,
  },

  description: {
    type: String,
  },

  createdby: {
    type: mongoose.Schema.ObjectId,
    ref: employee,
    required: true,
  },

  updatedby: {
    type: mongoose.Schema.ObjectId,
    ref: employee,
  },
});

const payment = mongoose.model("Payment", paymentschema);
export default payment;
