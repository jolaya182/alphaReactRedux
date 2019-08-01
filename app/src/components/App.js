/* *
  title: App.js 

  date: 7/24/2019

  author:  javier olaya

  description: this component handles the basic routing for the webpage
         
 */
import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import {  SearchMovies, MyMovies, whoops404 } from '../pages';
import pages from '../css/index.scss'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={SearchMovies} />
      <Route path='/SearchMovies'  component={SearchMovies} />
      <Route path='/MyMovies' component={MyMovies} />

      <Route component={whoops404} />
    </Switch>
  </Router>);

export default App;