import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route
          path="/movies/:id"
          render={ ({ match: { params: { id } } }) => <MovieDetails id={ id } /> }
        />
        {/* Rota construída com a ajuda do Amigo Luciano Amâncio (https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/52) */}
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
