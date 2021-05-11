// feito com auxilio: Rafael Medeiros - Turma 10 - Tribo A
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from '../pages';

class MyPages extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default MyPages;
