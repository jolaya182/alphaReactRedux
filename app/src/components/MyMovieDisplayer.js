/* *
  title: MyMovieDisplayer.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the display of all the set of 
  movies for the movies saved
         
 */
import React from 'react';
import RatedMovie from './RatedMovie';

/* define the properties of MyMovieDisplayer*/
export default class MyMovieDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.getAllMoviesFromDb = props.getAllMoviesFromDb;
  }

  componentDidMount() {
    this.getAllMoviesFromDb();
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state, props) => ({ movies: nextProps.mySavedMovies }))

  }

  /* *
   @description exracts all the imdbid from the saved movies

   @param array

 */
  getImdbIds = (movies) => {
    let m = movies.map((movie) => movie.imdbID);
    return m;
  }

  render() {
    const { mySavedMovies,
      deleteAllMovies,
      deleteMovie,
      getAllMoviesFromDb,
      addMovieRating,
      saveMovie,
      addMovieToTheDb,
      updateMovieToTheDb,
      upDateMovie,
      deleteMovieFromTheDb,
      deleteAllMoviesFromTheDb
    } = this.props
    const { movies } = this.state.movies;
    const { getImdbIds } = this;
    return (<div>
      <div
        className={"row movieTile ButtonDeleteMySavedMovies"}
        onClick={() => {
          const idsToSubmit = getImdbIds(mySavedMovies);
          deleteAllMovies();
          deleteAllMoviesFromTheDb(idsToSubmit)
        }
        }>
        Delete ALL
        </div>
      {mySavedMovies &&
        mySavedMovies.map((movie, i) =>
          <div className={"movieTile"} key={i}>
            <RatedMovie
              movObj={movie}
              P={movie.picturesrc}
              mySavedMovies={mySavedMovies}
              deleteMovie={deleteMovie}
              addMovieRating={addMovieRating}
              saveMovie={saveMovie}
              addMovieToTheDb={addMovieToTheDb}
              updateMovieToTheDb={updateMovieToTheDb}
              upDateMovie={upDateMovie}
              deleteMovieFromTheDb={deleteMovieFromTheDb}
            ></RatedMovie></div>)}
    </div>)
  }
}
