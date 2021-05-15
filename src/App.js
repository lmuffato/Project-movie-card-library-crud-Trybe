import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails'
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import { MovieForm } from './components';

function App() {
  return (
    <BrowserRouter>
      <h1> hello world </h1>
      <Switch>
        <Route path="/" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
