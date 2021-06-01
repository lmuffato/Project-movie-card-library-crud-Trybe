import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}
