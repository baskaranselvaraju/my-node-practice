import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  language: { type: String, required: true },
  duration: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String },
  rating: { type: Number, min: 0, max: 10 },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
