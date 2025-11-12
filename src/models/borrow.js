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
  phonenumber: { type: Number, required: true },

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

// ObjectId References
// - approveid → ref: user
// - bookid → ref: books
// - studendid → ref: register
// - returnapprovedby → ref: user
// - renewdapprovedby → ref: user
// - renewhistory.approveby → ref: user
// - updatedby → ref: user

// Date Fields
// - borrowdate
// - returndate
// - expectedreturndate
// - renewdate
// - renewhistory.renewdate
// - renewhistory.newduedate
// - penalty.paiddate

// String Fields
// - status → enum: ["borrowed", "returned", "lost", "renewed"]
// - penalty.reason
// - penalty.status → enum: ["Unpaid", "Paid"]
// - penalty.paymentmethod

// Number Fields
// - phonenumber
// - noofdays
// - penalty.amount

// Boolean Fields
// - penalty.haspeanlty

// Array Fields
// - renewhistory → contains objects with:
//     - renewdate
//     - newduedate
//     - approveby

// Model Name
// - Model: "Borrow&return"

// const borrowReturnSchema = new mongoose.Schema({
//   bookid: { type: mongoose.Schema.ObjectId, ref: books },
//   studendid: { type: mongoose.Schema.ObjectId, ref: Student},
//   returnapprovedby: { type: mongoose.Schema.ObjectId, ref: employee },
//   renewdapprovedby: { type: mongoose.Schema.ObjectId, ref: employee },
//   updatedby: { type: mongoose.Schema.ObjectId, ref: employee },

//   phonenumber: { type: Number },
//   noofdays: { type: Number },
//   borrowdate: { type: Date },
//   expectedreturndate: { type: Date },
//   renewdate: { type: Date },
//   returndate: { type: Date },
//   status: {
//     type: String,
//     enum: ["borrowed", "returned", "lost", "renewed"],
//     default: "borrowed",
//   },
//   penalty: penaltySchema,
//   renewhistory: [renewhistorySchema],
// });

// const penaltySchema = new mongoose.Schema({
//   haspeanlty: { type: Boolean, default: false },
//   reason: { type: Number },
//   paymentmethod: { type: String },
//   status: { type: String, enum: ["Unpaid", "Paid"] },
//   paiddate: { type: Date },
// });

// const renewhistorySchema = new mongoose.Schema({
//   renewdate: { type: Date },
//   newduedate: { type: Date },
//   approveby: { type: mongoose.Schema.ObjectId, ref: employee },
// });
