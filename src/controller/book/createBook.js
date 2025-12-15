import express from "express";
import Books from "../../models/books.js";
import generateToken from "../../util/generateToken.js";
// import cloudinary from "../../config/cloudinary.js";

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

//     app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     const imageUrl = await new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream(
//         {
//           resource_type: "image",
//           public_id: req.file.originalname.split(".")[0],
//           folder: "images/photo",
//         },
//         (error, result) => {
//           if (error) return reject(error);
//           resolve(result.secure_url);
//         }
//       ).end(req.file.buffer);
//     });

//     res.json({ url: imageUrl });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Upload failed" });
//   }
// });
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
