/* *
  title: MainMenu.js 

  date: 7/24/2019

  author:  javier olaya

  description: this content handles the main nav bar for the web page
         
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import pages from '../css/index.scss';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

const MainMenu = () => <nav className={"mainMenu"}>
  <NavLink to="/SearchMovies" activeStyle={selectedStyle}>[Search Movies]</NavLink>
  <NavLink to="/MyMovies" activeStyle={selectedStyle}>[MyMovies]</NavLink>
</nav>

export default MainMenu;