import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import NewMovie from '../pages/NewMovie';
import MovieDetails from '../pages/MovieDetails';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';

export default function Content() {
  return (
    <Switch>
      <Route path="/movies/new" component={ NewMovie } />

      <Route
        path="/movies/:id/edit"
        render={ (props) => <EditMovie { ...props } /> }
      />

      <Route
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />

      <Route exact path="/" component={ MovieList } />

      <Route
        path="*"
        render={ (props) => <NotFound { ...props } /> }
      />
    </Switch>
  );
}
