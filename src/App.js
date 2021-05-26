import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';
import EditMovie from './components/EditMovie';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="*" component={ NotFound } />
      <Route exact path="/" component={ MovieList } />
    </BrowserRouter>
  );
}

export default App;
