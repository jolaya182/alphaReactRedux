/* *
  title: MovieDisplayer.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles displaying all the set of movies for the search
  page
         
 */
import React from 'react';
import MovieAndRatedMovie from './MovieAndRatedMovie';

const MovieDisplayer = ({
  apiMovies,
  saveMovie,
  addMovieRating,
  mySavedMovies,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie
}) => {
  return (<div>
    {apiMovies && apiMovies.map((movObj, key) => key === 0 ? null :
      <MovieAndRatedMovie
        key={key}
        movObj={movObj}
        mySavedMovies={mySavedMovies}
        saveMovie={saveMovie}
        addMovieRating={addMovieRating}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
      ><label>Related:</label></MovieAndRatedMovie>)
    }
  </div>)
}

export default MovieDisplayer;