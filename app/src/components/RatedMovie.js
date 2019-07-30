/* *
  title: RatedMovies.js 

  date: 7/24/2019

  author:  javier olaya

  description: this compnent handles the logic behind the rating any movie
         
 */
import React from 'react';
import StarRating from './StarRating';
import Picture from './Picture'
const RatedMovie = ({
  movObj,
  P = false,
  saveMovie,
  addMovieRating,
  mySavedMovies,
  deleteMovie,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie,
  deleteMovieFromTheDb
}) => {
  let movieExists = { rating: false, comments: false };
  let savedMovie = {}

  //find and movies that currently exists in the redux store
  mySavedMovies.forEach(movie => {
    if (movie.imdbID === movObj.imdbID) {
      movieExists.rating = movie.rating;
      movieExists.comments = movie.comments
      savedMovie = movie;
    }
  });
  return (<div className={P ? " " : "row"}>
    <div className={"column"}>
      {P ?
        <div className={"row"}>
          <div className={"column"}>
            <div className={"row"}>
              <div className="column">
                <label>{movObj.title}</label>
                <Picture picture={P}></Picture>
              </div>
              <div className="column">
                <div>Year</div>
                <label>{movObj.year}</label>
              </div>
              {movObj.plot ? <div className="column">
                <label>Plot</label>
                <div>{movObj.plot}</div>
              </div> : null
              }
            </div>
            <div className={"row"}>
              <label
                className={"ButtonDeleteSavedMovie"}
                onClick={() => {
                  if (movieExists.rating || movieExists.comment) {
                    deleteMovie(savedMovie);
                    deleteMovieFromTheDb(savedMovie)
                  }
                }}
              >[Delete Movie]
              </label>
            </div>
          </div>
        </div> : null
      }
      <label className={"row"}>My Saved Movie</label>
      <input
        type="text"
        value={movieExists.comments ? movieExists.comments : ""}
        className={"row"}
        onChange={(e) => {
          movObj.rating = movieExists.rating ? movieExists.rating : 0;
          movObj.comments = e.target.value;
          if (!movieExists.rating && !movieExists.comments) {
            movObj.plot = movObj.Plot ? movObj.Plot : "Plot"
            addMovieToTheDb(movObj, "comment");
            saveMovie(movObj);
          } else {
            movObj.plot = movObj.Plot ? movObj.Plot : "Plot"
            updateMovieToTheDb(movObj, "comment");
            upDateMovie(movObj);
          }
        }}>
      </input>
      <StarRating
        totalStars={5}
        selectedStars={movieExists.rating ? movieExists.rating : 0}
        movieExists={movieExists}
        movie={movObj}
        addMovieRating={addMovieRating}
        addMovieToTheDb={addMovieToTheDb}
        updateMovieToTheDb={updateMovieToTheDb}
        upDateMovie={upDateMovie}
      >
      </StarRating>
    </div>
  </div>)
}

export default RatedMovie;