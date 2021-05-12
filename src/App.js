import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

// Entire project done using https://reactrouter.com/web documentation
// Routes order tip given by Iago
const App = () => (
  <Router>
    <div>Movie Card Library CRUD</div>
    <Switch>
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/" component={ MovieList } />
      <Route component={ NotFound } />
    </Switch>
  </Router>
);

export default App;
