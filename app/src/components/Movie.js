/* *
  title: Movie.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the data place holder
  for the movie data
         
 */
import React from 'react';
import Picture from './Picture';

const Movie = ({ movObj }) => {
  return (<div >
    <div className="row">
      <div className="column">
        <label>{movObj.title}</label>
        <Picture picture={movObj.poster}></Picture>
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
  </div>)
}

export default Movie;