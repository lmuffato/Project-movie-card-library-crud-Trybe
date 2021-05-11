import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
