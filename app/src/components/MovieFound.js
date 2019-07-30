/* *
  title: MovieFound.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the first found movie on the 
  set of movies retrieved from the api search call
         
 */
import React from 'react';
import MovieAndRatedMovie from './MovieAndRatedMovie';

const MovieFound = ({
  movieFound,
  saveMovie,
  addMovieRating,
  mySavedMovies,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie
}) => {
  return (<div>
    {movieFound.length > 0 && movieFound.map((movObj, key) =>
      <MovieAndRatedMovie
        key={key}
        movObj={movObj}
        saveMovie={saveMovie}
        addMovieRating={addMovieRating}
        mySavedMovies={mySavedMovies}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
      ></MovieAndRatedMovie>)
    }
  </div>)
}

export default MovieFound;