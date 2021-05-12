import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route to="/" component={ MovieList } exact />
          <Route to="/movies/:id" component={ MovieDetails } exact />
          <Route to="movies/new" component={ NewMovie } exact />
          <Route to="/movies/:id/edit" component={ EditMovie } exact />
          <Route component={ NotFound } exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
