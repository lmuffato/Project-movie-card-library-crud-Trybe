import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Route path="/"><MovieList /></Route>
      <Route path="/movies/:id"><MovieDetails /></Route>
      <Route path="/movies/new"><NewMovie /></Route>
      <Route path="/movies/:id/edit"><EditMovie /></Route>
      <Route><NotFound /></Route>
    </div>
  );
}

export default App;
