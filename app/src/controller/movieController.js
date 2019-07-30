/* *
  title: movieController.js 

  date: 7/24/2019

  author:  javier olaya

  description: this controller handles the all the squelize calls to the db
         
 */
const Movie = require('../model/movieModel');

const movieController = {};

movieController.getAllMovies = (req, res) => {
  Movie.findAll().then(users => {
    return res.send(users);
  });
}

movieController.getMovie = (req, res) => {
  let q = req.body
  Movie.findByPk(q.id).then(users => {
    return res.send(users);
  });
}
movieController.createMovie = (req, res) => {
  let q = req.body;

  Movie.create({ title: q.title, year: q.year, plot: q.plot, picturesrc: q.poster, rating: q.rating, comments: q.comments, imdbID: q.imdbID }).then(movie => {
    return res.send(movie);
  })
}

movieController.deleteMovie = (req, res) => {
  let q = req.body;
  Movie.destroy({ where: { id: q.id } }).then(movie => {
    return res.send({ "status": "success" });
  })
}

movieController.deleteAllMovies = (req, res) => {
  let q = req.body;
  Movie.destroy({ where: { imdbID: q.imdbIDs } }).then(movie => {
    return res.send({ "status": "success" });
  })
}

movieController.updateMovie = (req, res) => {
  let q = req.body;
  Movie.update({ rating: q.rating, comments: q.comments }, { where: { imdbID: q.imdbID } }).then(movie => {
    return res.send(movie);
  })
}

module.exports = movieController;