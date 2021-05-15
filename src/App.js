import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import './App.css';
import MovieDetails from './pages/MovieDetails'
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

// olhe o movie details, o exemplo do dia 13.2 das props.

export default App;
