import express from "express";
import Books from "../../models/books";

const deleteBook = async (req, res) => {
  try {

    const{id}=req.params;

    const deletedata = await Books.findByIdAndDelete(id);

    if (!deletedata) {
      return res.status(400).json({
        success: true,
        message: "Inavlid id or data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book data deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal Server error", error: error.message });
  }
};

export default deleteBook;
