/* *
  title: MyMovies.js 

  date: 7/24/2019

  author:  javier olaya

  description: this components handles the set of "my movies". it is 
  needed in order to distinguish which component will be rendered
         
 */
import React from 'react';
import MyMovieDisplayer from './MyMovieDisplayer';
const MyMovies = ({ mySavedMovies,
  deleteAllMovies,
  deleteMovie,
  getAllMoviesFromDb,
  addMovieRating,
  saveMovie,
  addMovieToTheDb,
  updateMovieToTheDb,
  deleteMovieFromTheDb,
  deleteAllMoviesFromTheDb,
  upDateMovie
}) => {
  return (<div>
    <MyMovieDisplayer mySavedMovies={mySavedMovies}
      deleteAllMovies={deleteAllMovies}
      deleteMovie={deleteMovie}
      getAllMoviesFromDb={getAllMoviesFromDb}
      addMovieRating={addMovieRating}
      saveMovie={saveMovie}
      addMovieToTheDb={addMovieToTheDb}
      updateMovieToTheDb={updateMovieToTheDb}
      upDateMovie={upDateMovie}
      deleteMovieFromTheDb={deleteMovieFromTheDb}
      deleteAllMoviesFromTheDb={deleteAllMoviesFromTheDb}
    >
    </MyMovieDisplayer>
  </div>)
}
export default MyMovies