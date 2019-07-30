import { connect } from "react-redux";
import { addRatedMovie, deleteMovie, deleteAllMovies } from '../actions'
import MyMovies from '../components/MyMovies';

const mapStateToProps = state => {
  console.log("mapStateToProps:", state);
  return ({
    mySavedMovies: state.MyMovies
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteMovie: (movie) => dispatch(deleteMovie(movie)),
    deleteAllMovie: (movie) => dispatch(deleteAllMovie(movie)),
    saveMovie: (movie) => dispatch(addRatedMovie(movie)),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMovies);
