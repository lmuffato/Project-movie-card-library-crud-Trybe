import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route component={ NotFound } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
    </Router>
  );
}

export default App;
