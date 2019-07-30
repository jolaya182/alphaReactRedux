/* *
  title: MymoviesAndSearchMovie.js 

  date: 7/24/2019

  author:  javier olaya

  description: this components handles the decision of the type of component
  it should render based on the parent components props
         
 */
import React from 'react';
import MyMovies from './MyMovies';
import SearchMovie from './SearchMovie';

const MyMoviesAndSearchMovie = ({
  mySavedMovies,
  deleteMovie,
  deleteAllMovies,
  saveMovie,
  definiteComponenet,
  addMovieRating,
  getAllMoviesFromDb,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie,
  deleteMovieFromTheDb,
  deleteAllMoviesFromTheDb
}) => {
  return (
    <div>
      {(definiteComponenet === "MyMovies") ? <MyMovies
        deleteAllMovies={deleteAllMovies}
        deleteMovie={deleteMovie}
        mySavedMovies={mySavedMovies}
        getAllMoviesFromDb={getAllMoviesFromDb}
        addMovieRating={addMovieRating}
        saveMovie={saveMovie}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
        deleteMovieFromTheDb={deleteMovieFromTheDb}
        deleteAllMoviesFromTheDb={deleteAllMoviesFromTheDb}
      ></MyMovies> :
        <SearchMovie
          saveMovie={saveMovie}
          addMovieRating={addMovieRating}
          mySavedMovies={mySavedMovies}
          addMovieToTheDb={addMovieToTheDb}
          updateMovieToTheDb={updateMovieToTheDb}
          upDateMovie={upDateMovie}
          deleteMovieFromTheDb={deleteMovieFromTheDb}
        ></SearchMovie>}
    </div>
  )
}

export default MyMoviesAndSearchMovie;