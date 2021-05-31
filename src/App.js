// Inciando o projeto jlfagundes
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route
        exact
        path="/movies/:id"
        component={ MovieDetails }
      />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route path="" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
