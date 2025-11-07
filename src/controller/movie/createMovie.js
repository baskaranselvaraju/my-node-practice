import express from 'express';
import Movie from "../../models/movie.js";

const createMovie = async (req, res) => {
  try {
    const { title, genre, language, duration, releaseDate, director, rating } =
      req.body;

    const register = new Movie({
      title,
      genre,
      language,
      duration,
      releaseDate,
      director,
      rating,
    });

    register.save();
    res.status(200).json({
      success: true,
      message: "Movie created successfully",
      register,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export default createMovie;
