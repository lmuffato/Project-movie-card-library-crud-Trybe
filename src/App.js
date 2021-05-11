import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

// Entire project done using https://reactrouter.com/web documentation
const App = () => (
  <Router>
    <div>Movie Card Library CRUD</div>
    <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Switch>
  </Router>
);

export default App;
