import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import MovieList from '../pages/MovieList';
import NewMovie from '../pages/NewMovie';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}
