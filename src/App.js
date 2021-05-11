import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="/" component={ MovieList } />
      {/* <Route exact path="" component={ NotFound } /> */}
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
    </BrowserRouter>
  );
}

export default App;
