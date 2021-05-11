import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
