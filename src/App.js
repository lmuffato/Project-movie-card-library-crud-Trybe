import React from 'react';
import { Route, Switch } from 'react-router-dom';// Renomear a BrowserRouter para Router , para nao ter confusão com com a proxima importação Route,testei tirar
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/Movies/:id" component={ MovieDetails } />
      <Route exact path="/" component={ MovieList } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
