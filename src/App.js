import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import EditMovie from './pages/EditMovie';

// adicionei as rotas
function App() {
  return (
    <BrowserRouter>
      <Router path="/" component={ MovieList }>
        <MovieList />
      </Router>
      <Router path="/movies/:id" component={ MovieDetails }>
        <MovieDetails />
      </Router>
      <Router path="/movies/new" component={ NewMovie }>
        <NewMovie />
      </Router>
      <Router path="/movies/:id/edit" component={ EditMovie }>
        <EditMovie />
      </Router>
      <Router path="/movies/:id/edit" component={ NotFound }>
        <NotFound />
      </Router>
    </BrowserRouter>
  );
}

export default App;
