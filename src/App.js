import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

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
