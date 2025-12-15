import express from "express";
import Books from "../../models/books.js";

const getBook = async (req, res) => {
  try {
    const data = await Books.find().select("-password");

    if (data.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No user found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book data recieved successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error getting books data:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal Server error", error: error.message });
  }
};

export default getBook;
