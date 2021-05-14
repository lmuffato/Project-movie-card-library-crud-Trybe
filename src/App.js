import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route path="/movies/:id/edit" exact component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
