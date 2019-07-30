/* *
  title: Star.js 

  date: 7/24/2019

  author:  javier olaya

  description: this cpmponent handles presentational aspect of the star rating
         
 */
import React from 'react';
import styles from '../css/index.scss';

const Star = ({ selected, addMovieRating = f => f }) => {
  return (<div className={"column"}>
    <div
      className={(selected) ? "star selected" : "star"}
      onClick={() => { addMovieRating() }}
    ></div>
  </div>)
}

export default Star; 