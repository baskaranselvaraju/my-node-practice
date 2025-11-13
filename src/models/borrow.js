import mongoose from "mongoose";
import Student from "./student.js";
import books from "./books.js";
import employee from "./employee.js";

const borrowReturnSchema = new mongoose.Schema({
  borrowdate: { type: Date, required: true },
  studentid: { type: mongoose.Schema.ObjectId, ref: Student, required: true },
  bookid: { type: mongoose.Schema.ObjectId, ref: books, required: true },
  approvedby: { type: mongoose.Schema.ObjectId, ref: employee, required: true },
  status: {
    type: String,
    enum: ["borrowed", "returned", "renewed", "lost"],
    default: "borrowed",
  },
  duedate: { type: Date, required: true },
  phoneno: { type: Number, required: true },

  returndate: { type: Date },
  returnapprovedby: { type: mongoose.Schema.ObjectId, ref: employee },
  haspenalty: { type: Boolean, default: false },
  paymentstatus: { type: String, enum: ["Paid", "Unpaid"] },

  renewhistory: [
    {
      renewedate: { type: Date },
      newduedate: { type: Date },
      renewapprovedby: { type: mongoose.Schema.ObjectId, ref: employee },
    },
  ],
});

const BorrowReturn = mongoose.model("BorrowReturn", borrowReturnSchema);
export default BorrowReturn;
