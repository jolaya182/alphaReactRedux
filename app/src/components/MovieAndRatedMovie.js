/* *
  title: MovieAndRatedMovie.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the composition of
  movie and rated component
         
 */
import React from 'react';
import Movie from './Movie';
import RatedMovie from './RatedMovie';

const MovieAndRatedMovie = ({
  movObj,
  children,
  saveMovie,
  addMovieRating,
  mySavedMovies,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie
}) => {
  return (<div className={"movieTile"}>
    {children}
    <Movie movObj={movObj}></Movie>
    <RatedMovie
      movObj={movObj}
      saveMovie={saveMovie}
      addMovieRating={addMovieRating}
      mySavedMovies={mySavedMovies}
      addMovieToTheDb={addMovieToTheDb}
      updateMovieToTheDb={updateMovieToTheDb}
      upDateMovie={upDateMovie}
    ></RatedMovie>
  </div>)
}

export default MovieAndRatedMovie;