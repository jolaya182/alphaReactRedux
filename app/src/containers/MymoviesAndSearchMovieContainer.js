/* *
  title: .js 

  date: 7/24/2019

  author:  javier olaya

  description: this container handles the grouping of MyMoviesAndSearchMovie data 
  and passes it down to all components
         
 */
import { connect } from "react-redux";
import {
  addRatedMovie,
  deleteMovie,
  deleteAllMovies,
  addMovieRating,
  getMovies,
  fetchMovies,
  getAllMoviesFromDb,
  addMovieToTheDb,
  upDateMovie,
  updateMovieToTheDb,
  deleteMovieFromTheDb,
  deleteAllMoviesFromTheDb,
  errorMessage
} from '../actions'
import MyMoviesAndSearchMovie from '../components/MyMoviesAndSearchMovie';

const mapStateToProps = (state, ownProps) => {
  return ({
    mySavedMovies: state.MyMovies,
    definiteComponenet: ownProps.definiteComponenet
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteMovie: (movie) => dispatch(deleteMovie(movie)),
    deleteAllMovies: () => dispatch(deleteAllMovies()),
    saveMovie: (movie) => dispatch(addRatedMovie(movie)),
    addMovieRating: (movie, Rating) => dispatch(addMovieRating(movie, Rating)),
    getAllMoviesFromDb: () => dispatch(getAllMoviesFromDb()),
    addMovieToTheDb: (movie, commentRating) => dispatch(addMovieToTheDb(movie, commentRating)),
    upDateMovie: (movie) => dispatch(upDateMovie(movie)),
    updateMovieToTheDb: (movie, commentRating) => dispatch(updateMovieToTheDb(movie, commentRating)),
    deleteMovieFromTheDb: (movie) => dispatch(deleteMovieFromTheDb(movie)),
    deleteAllMoviesFromTheDb: (movieIds) => dispatch(deleteAllMoviesFromTheDb(movieIds))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMoviesAndSearchMovie);
