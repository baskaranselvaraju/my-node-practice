import express from "express";
import Books from "../../models/books.js";
import generateToken from "../../util/generateToken.js";

const createBook = async (req, res) => {
  try {
    const role = req.user.role;
    if (role === "student") {
      return res
        .status(500)
        .json({ success: false, message: "Student can not add data " });
    }
    const id = req.user.id;
    console.log("id :", id);
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
      description
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

    const data = new Books({
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
      addedby: id,
    });

    await data.save();
    const token = generateToken(data._id);
    res.status(200).json({
      success: true,
      message: "Book created successfully",
      token,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default createBook;
