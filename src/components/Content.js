import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import NewMovie from '../pages/NewMovie';
import NotFound from '../pages/NotFound';
import EditMovie from '../pages/EditMovie';

function Content() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route
          path="/movies/:id"
          component={ MovieDetails }
          // render={ (props) => <MovieDetails { ...props } atributo =dsauhds /> }
        />
        <Route path="/movies/new" component={ NewMovie } />
        <Route component={ NotFound } />
      </Switch>
    </main>
  );
}

export default Content;
