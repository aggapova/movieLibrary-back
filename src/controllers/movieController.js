const Movie = require('../models/movieModels');

class movieController {
  static async getAllMovies(req, res) {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      console.error('Failed to retrieve movies:', err);
      return res.status(500).end();
    }
  }

  static async getMovieById(req, res) {
    const { id } = req.params;
    try {
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (err) {
      console.error('Failed to retrieve movie by ID:', err);
      return res.status(500).end();
    }
  }

  static async createMovie(req, res) {
    try {
      const movieData = req.body;
      const movie = await Movie.create(movieData);
      res.status(201).json(movie);
    } catch (err) {
      console.error('Failed to create movie:', err);
      return res.status(500).end();
    }
  }

  static async updateMovie(req, res) {
    const { id } = req.params;
    try {
      const updatedMovie = req.body;
      const movie = await Movie.findByIdAndUpdate(id, updatedMovie, { new: true });
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (err) {
      console.error('Failed to update movie:', err);
      return res.status(500).end();
    }
  }

  static async deleteMovie(req, res) {
    const { id } = req.params;
    try {
      const movie = await Movie.findByIdAndDelete(id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
      console.error('Failed to delete movie:', err);
      return res.status(500).end();
    }
  }
}

module.exports = movieController;