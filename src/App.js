import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route path="/movies/:id/edit" component={EditMovie}/>
      <Route path="/movies/:id" component={MovieDetails}/>
      <Route path="/movies/new" component={NewMovie}/>
      <Route path="/" exact component={MovieList}/>
      <Route path="*" component={NotFound}/>
    </BrowserRouter>
  );
}

export default App;
