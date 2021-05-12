import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>Movie Card Library CRUD</div>
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/" exact component={ MovieList } />
        <Route path="/:other" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
