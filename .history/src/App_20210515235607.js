import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/" component={ MovieList } exact />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
