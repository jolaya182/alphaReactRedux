/* *
  title: index.js 

  date: 7/24/2019

  author:  javier olaya

  description: this index file handles the combinations of MyMovies and
  SearchMovies reducers
         
 */
import { combineReducers } from 'redux';
import MyMovies from './MyMovies';
import SearchMovies from './SearchMovies';

export default combineReducers({
  MyMovies,
  SearchMovies
})
