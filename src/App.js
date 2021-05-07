import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </header>
      <Switch>
        <Route exact path="/"><MovieList /></Route>
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/not-fund"><NotFound /></Route>
        <Route path="/"><Redirect to="/not-fund" /></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
