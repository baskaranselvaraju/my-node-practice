import express from "express";
import Books from "../../models/books.js";


const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const role = req.user.role;
    if (role === "student") {
      return res
        .status(500)
        .json({ success: false, message: "Student can not update data " });
    }
    const {
      bookname,
      authorname,
      publishdate,
      isbn,
      totalcopies,
      availablecopies,
      date,
      status,
      category,
      language,
      description,
    } = req.body;

    if (
      !bookname ||
      !authorname ||
      !publishdate ||
      !isbn ||
      !totalcopies ||
      !availablecopies ||
      !date
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existing = await Books.findOne({ isbn });
    if (existing) {
      return res.status(400).json({ message: "Book already registered" });
    }
    const newData = {
      bookname,
      authorname,
      publishdate,
      isbn,
      totalcopies,
      availablecopies,
      date,
      status,
      category,
      language,
      description,
    };
    const data = await Books.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Employee updated successfully", data: data });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default updateBook;
