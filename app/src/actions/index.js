/* *
  title: action.js 

  date: 7/24/2019

  author:  javier olaya

  description: this action file exports all the action creator and thunks functions
         
 */

export const addRatedMovie = (movie) => ({
  type: "ADD_RATED_MOVIE",
  movie: movie
})

export const deleteMovie = (movie) => ({
  type: "DELETE_MOVIE",
  movie: movie
});


export const deleteAllMovies = () => ({
  type: "DELETE_ALL_MOVIES"
});

export const addMovieRating = (movie, rating) => ({
  type: "ADD_MOVIE_RATING",
  movie: movie,
  rating: rating
});

export const getMovies = (movies) => ({
  type: "GET_MOVIES",
  movies: movies
})

export const upDateMovie = (movie) => ({
  type: "UPDATE_MOVIE",
  movie: movie
})

export const updateMovieRating = (movie) => ({
  type: "UPDATE_MOVIE_RATING",
  movie: movie
})

export const errorMessage = (message, error) => ({

  type: 'ERROR_MESSAGE',
  message: message,
  error: error
});

function fetchMovies() {
  let options = {
    method: "GET",
    mode: 'cors',
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
    }

  };
  return fetch(`http://localhost:3000/all`, options);
}

export function getAllMoviesFromDb() {
  return function (dispatch) {
    return fetchMovies()
      .then(
        response => {
          let json = response.json()
          return json;
        }, (error) => dispatch(errorMessage("error from the 'getAllMoviesFromDb' function. check if the server is working", error))
      )
      .then(json => {
        
        if(json.type === "ERROR_MESSAGE"){ return;}
        return dispatch(getMovies(json));
      }, (error) => dispatch(errorMessage("error from get the get action", error)))
  }
}

function addMovieDb(movie) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
    },
    body: JSON.stringify(movie)
  };
  return fetch(`http://localhost:3000`, options);
}

export function addMovieToTheDb(movie, commentRating) {
  return function (dispatch) {
    return addMovieDb(movie)
      .then(
        response => {
          let json = response.json()
          return json;
        }, (error) => dispatch(errorMessage("error from get the get action", error))
      )
  }
}

function updateMovieDb(movie) {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
    },
    body: JSON.stringify(movie)
  };
  return fetch(`http://localhost:3000`, options);
}

export function updateMovieToTheDb(movie, commentRating) {
  return function (dispatch) {
    return updateMovieDb(movie)
      .then(
        response => {
          let json = response.json()
        }, (error) => dispatch(errorMessage("error from 'updateMovieToTheDb' action", error))
      )
  }
}

function deleteMovieDb(movie) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
    },
    body: JSON.stringify(movie)
  };
  return fetch(`http://localhost:3000`, options);
}

export function deleteMovieFromTheDb(movie) {
  return function (dispatch) {
    return deleteMovieDb(movie)
      .then(
        response => {
          let json = response.json()
        }, (error) => dispatch(errorMessage("error from 'updateMovieToTheDb' action", error))
      )
  }
}

function deleteAllMoviesDb(moviesId) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ imdbIDs: moviesId })
  };
  return fetch(`http://localhost:3000/all`, options);
}

export function deleteAllMoviesFromTheDb(moviesId) {
  return function (dispatch) {
    return deleteAllMoviesDb(moviesId)
      .then(
        response => {
          let json = response.json()
        }, (error) => dispatch(errorMessage("error from 'updateMovieToTheDb' action", error))
      )
  }
}