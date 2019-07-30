/* *
  title: .js 

  date: 7/24/2019

  author:  javier olaya

  description: this file handles the content that goes on the web page
         
 */
import React from 'react';
import pages from '../css/index.scss';
import MainMenu from './MainMenu';
import MymoviesAndSearchMovieContainer from '../containers/MymoviesAndSearchMovieContainer';
import MyMoviesContainer from '../containers/MyMoviesContainer';

export const whoops404 = () => (<div className={"whoops404"}>
  <h1>resources not found at {location.pathname}</h1>
</div>)

const PageTemplate = ({ children }) => <div className={"page"}>
  <MainMenu></MainMenu>
  {children}
</div>

export const SearchMovies = () => (
  <PageTemplate>
    <div>
      <section className={"SearchMovies"}>
        <h1>Movies</h1>
      </section>
      <MymoviesAndSearchMovieContainer definiteComponenet="SearchMovie"></MymoviesAndSearchMovieContainer>
    </div>
  </PageTemplate>);

export const MyMovies = () => (
  <PageTemplate>
    <div>
      <section className={"MyMovies"}>
        <h1>My Movies</h1>
      </section>
      <MymoviesAndSearchMovieContainer definiteComponenet="MyMovies"></MymoviesAndSearchMovieContainer>
    </div>
  </PageTemplate>
);


