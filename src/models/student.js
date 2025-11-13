import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registerno: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneno: { type: Number, required: true },
  dept: { type: String, required: true }, // mantatory
  bloodgroup: { type: String, enum: ["A+", "B+", "AB+", "A-", "O+"] }, // optional
  role: { type: String, default: "student" },
  limit: { type: Number, default: 3 }, // frontend(5) or empty (3)
});

const Student = mongoose.model("Student", studentSchema);

export default Student;

// import mongoose from "mongoose";

// const studentschema = new mongoose.Schema({
//   name: { type: String, required: true },
//   registerno: { type: String, required: true },
//   dept: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   phone: { type: Number, required: true }, // mandatory

//   bloodgroup: { type: String, enum: ["A+", "B+", "AB+", "A-"] }, // optional
//   role: { type: String, default: "student" },
//   limit: { type: Number, default: 3 } // frontend(5) or empty(3)
// });

// // new collection
// const student = mongoose.model("student", studentschema);

// export default student;
