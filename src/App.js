import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" componente={ MovieList } />
        <Route exact path="/movies/:id" componente={ MovieDetails } />
        <Route exact path="/movies/new" componente={ NewMovie } />
        <Route exact path="/movies/:id/edit" componente={ EditMovie } />
        <Route exact path="*" componente={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
