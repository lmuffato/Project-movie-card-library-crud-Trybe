import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
