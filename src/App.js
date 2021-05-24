import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
