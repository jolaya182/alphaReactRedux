/* *
  title: SearchMovies.js 

  date: 7/24/2019

  author:  javier olaya

  description: this components handles the set of "search movies". it is 
  needed in order to distinguish which component will be rendered
         
 */
import React from 'react';
import Autocomplete from './Autocomplete';
import MovieDisplayer from './MovieDisplayer';
import MovieFound from './MovieFound';
import reactKeys from '../keys/reactKeys';

/* define the properties of  */
export default class searchMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      movieFound: []
    }
  }

  /* *
    @description does an api call to search by the movie title typed then getting a list of
    related movies

    @param string

  */
  searchMovies = (movieTitle) => {
    fetch(`http://omdbapi.com/?apikey=${reactKeys}&s=${movieTitle}`)
      .then((response) => response.json())
      .then((json) => {
        const j = json;
        this.processIncomingMovies(j)
      })
      .catch((err) => console.log("error", err));
  }

  /* *
    @description funciton process the in coming movies from the searchMovies function

    @param array

  */
  processIncomingMovies = (j) => {
    let modifiedKeysForIncomingMovies = j.Search.map((movie) => {
      return {
        poster: movie.Poster,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        imdbID: movie.imdbID
      }
    })
    this.setState((state, props) => ({ movies: modifiedKeysForIncomingMovies }));
  }

  /* *
    @description does an api call to search by the movie title typed and then getting one specific movie

    @param string

  */
  searchMovie = (movieTitle) => {
    fetch(`http://omdbapi.com/?apikey=${reactKeys}&t=${movieTitle}`)
      .then((response) => response.json())
      .then((json) => {
        const j = json;
        this.processIncomingMovie(j)
      })
      .catch((err) => console.log("error", err));
  }

  /* *
    @description funciton process the in coming movies from the searchMovie function

    @param 

  */
  processIncomingMovie = (j) => {
    const movieObj = j ? {
      title: j.Title,
      year: j.Year,
      plot: j.Plot.substring(0, 99),
      poster: j.Poster,
      imdbID: j.imdbID
    } : [];
    this.setState((state, props) => ({ movieFound: [movieObj] }));
  }

  render() {
    const { searchMovies, searchMovie } = this;
    const { movies, movieFound } = this.state;
    const { saveMovie,
      addMovieRating,
      mySavedMovies,
      addMovieToTheDb,
      updateMovieToTheDb,
      upDateMovie
    } = this.props;
    return (<div >
      <Autocomplete searchMovies={searchMovies} searchMovie={searchMovie}></Autocomplete>
      <MovieFound
        movieFound={movieFound}
        saveMovie={saveMovie}
        addMovieRating={addMovieRating}
        mySavedMovies={mySavedMovies}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
      ></MovieFound>

      <MovieDisplayer
        apiMovies={movies}
        saveMovie={saveMovie}
        addMovieRating={addMovieRating}
        mySavedMovies={mySavedMovies}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
      ></MovieDisplayer>
    </div>)
  }
}
