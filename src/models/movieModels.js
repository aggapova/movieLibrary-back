const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  Runtime: { type: String, required: true },
  Poster: { type: String, required: true },
  Genre: { type: String, required: true },
  Rating: { type: String, required: true },
  Description: { type: String, required: true },
  Actors: { type: String, required: true },
  Director: { type: String, required: true },
  Trailer: { type: String, required: true },
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;
