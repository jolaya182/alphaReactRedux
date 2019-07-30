/* *
  title: Autocomplete.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the retrieval of suggested 
  movies doing an api call from the omdbi server
         
 */
import React from 'react';
import styles from '../css/index.scss';
import reactKeys from '../keys/reactKeys';

/* define the properties of the Autocomplete */
export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sugestions: "",
      text: "",

    }
  }

  /* *
     @description makes a api call after every keystroke of a length
     higher than 2 characters 
 
     @param event object
 
   */
  onTextChange = (e) => {
    const text = e.target.value;
    let sugestions = [];
    if (text.length >= 3) {
      this.findMovies(text)
    } else {
      this.setState((state, props) => ({ sugestions: sugestions, text }));
    }
  }

  /* *
     @description gets the selected text and stores it in the state
 
     @param string
 
   */
  sugestionSelected = (text) => {

    this.setState((state, props) => ({ text: text, sugestions: [] }));
  }

  /* *
   @description ensures that the keystroke is an "enter" 
   keystroke

   @param 

 */
  keyPressed = (e) => {
    if (e.key === "Enter") {
      return true;
    }
    return false;
  }

  /* *
   @description makes the actual api call and store the suggestions in state 

   @param string

 */
  findMovies = (movieTitle) => {
    fetch(`http://omdbapi.com/?apikey=${reactKeys}&s=${movieTitle}`)
      .then((response) => response.json())
      .then((json) => {
        const sugest = json;
        if (sugest.Response == "True") {
          const reg = new RegExp(`^${movieTitle}`, 'i');
          let found = sugest.Search.filter((value) => reg.test(value.Title) ? value.Title : {});
          this.setState((state, props) => ({ sugestions: found, text: movieTitle }));
        } else {
          this.setState((state, props) => ({ text: movieTitle }));
        }
      })
      .catch((err) => console.log("error", err));
  }

  /* *
   @description executes the search functions for the 
   different api calls

   @param string, function, function

 */
  fireSearches(movieTitle, searchMovies, searchMovie) {
    searchMovies(movieTitle);
    searchMovie(movieTitle)
  }

  componentWillMount() {
    this.searchMovies = this.props.searchMovies;
    this.searchMovie = this.props.searchMovie;
  }

  render() {
    let { sugestions, text } = this.state;
    let { sugestionSelected, onTextChange, keyPressed, fireSearches } = this;
    const { searchMovies, searchMovie } = this.props;
    return (
      <div className="app-component">
        <div className="AutoCompleteText">
          <input type="text" value={text} onChange={onTextChange} onKeyPress={(e) => keyPressed(e) ? fireSearches(e.target.value, searchMovies, searchMovie) : null}></input>
          <ul>
            {sugestions.length !== 0 &&
              sugestions.map((value, ind) => {
                return (<li key={ind} onClick={(e) => {
                  fireSearches(value.Title, searchMovies, searchMovie);
                  return sugestionSelected(value.Title)
                }}>{value.Title}</li>)
              })}
          </ul>
        </div>
      </div>
    )
  }
}