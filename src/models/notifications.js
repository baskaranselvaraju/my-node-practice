import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: mongoose.Schema.ObjectId, required: true },
    receiverid: { type: String, required: true },
    isRead: { type: String, default: false },
  },
  {
    timestamps: true,
  }
);

const notification = mongoose.model("notification", notificationSchema);

export default notification;
