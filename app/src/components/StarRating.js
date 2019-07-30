/* *
  title: StarRating.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the displays of the all the stars to be displayed
         
 */
import React from 'react';
import Star from './Star';
import styles from '../css/index.scss';

const StarRating = ({
  movie,
  totalStars,
  selectedStars,
  addMovieRating,
  movieExists,
  addMovieToTheDb,
  updateMovieToTheDb,
  upDateMovie
}) => {
  return (<div className="row">
    {[...Array(totalStars)].map((item, i) => {
      return (
        <div
          key={i}>
          <Star
            selected={i < selectedStars}
            addMovieRating={() => {
              let actualMovie = { ...movie, rating: i + 1, comments: movieExists.comments ? movieExists.comments : "" }
              if (!movieExists.rating && !movieExists.comments) {
                actualMovie.plot = actualMovie.Plot ? actualMovie.Plot : "Plot"
                addMovieToTheDb(actualMovie, "rating");
                addMovieRating(actualMovie, i + 1);
              } else {
                actualMovie.plot = actualMovie.Plot ? actualMovie.Plot : "Plot"
                updateMovieToTheDb(actualMovie, "rating")
                upDateMovie(actualMovie)
              }
            }}
          >
          </Star>
        </div>)
    })}
  </div>)
}

export default StarRating;