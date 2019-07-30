import { connect } from "react-redux";
import { addRatedMovie, deleteMovie, deleteAllMovie } from '../actions'
import SearchMovie from '../components/SearchMovie';

const mapStateToProps = state => {
  console.log("mapStateToProps:", state);
  return ({ mySavedMovies: state.MyMovies })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    saveMovie: (movie) => dispatch(addRatedMovie(movie)),

  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovie);
