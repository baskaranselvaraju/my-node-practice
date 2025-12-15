import mongoose from "mongoose";

const requestschema = new mongoose.Schema({
    bookname: { type: String, required: true },
    bookauthor: { type: String, required: true },
    category: { type: String, required: true },

    requestby: { type: mongoose.Schema.ObjectId, ref: "student", required: true },

    reason: { type: String },

    upvotes: [
        { type: mongoose.Schema.ObjectId, ref: "student" }
    ],

    votecount: { type: Number, default: 0 },

    status: { type: String, enum: ["pending", "approved", "rejected"] },

    resolvedby: { type: mongoose.Schema.ObjectId },

    adminnote: { type: String }
});

const request = mongoose.model("request", requestschema);
export default request;
