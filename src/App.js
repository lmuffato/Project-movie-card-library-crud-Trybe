import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
      <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
      <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
      <Route path="/:any" component={ NotFound } />
    </BrowserRouter>
    // <div>Movie Card Library CRUD</div>
  );
}

export default App;
