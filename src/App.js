import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/" component={ MovieList } />
      <Route path="/:other" component={ NotFound } />
    </BrowserRouter>
  );
}
