/* *
  title: MyMovies.js 

  date: 7/24/2019

  author:  javier olaya

  description: this reudcer handles the all the store updated for the saved movies
         
 */

const MyMovies = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_MOVIE":
      return state.map((movie) => {
        if (movie.imdbID == action.movie.imdbID) {
          return action.movie
        } else { return movie }
      });
    case "GET_MOVIES":
      return action.movies;
    case "DELETE_MOVIE":
      return state.filter((movie) =>
        movie.imdbID != action.movie.imdbID
      )
    case "DELETE_ALL_MOVIES":
      return [];

    case "ADD_RATED_MOVIE":
      if (state.length > 0) {
        return [...state, action.movie];
      } else {
        return [action.movie];
      }
    case "ADD_MOVIE_RATING":
      if (state.length > 0) {
        return [...state, { ...action.movie, rating: action.rating }]
      } else {
        return [{ ...action.movie, rating: action.rating }];
      }
    default:
      return state;
  }
}

export default MyMovies;