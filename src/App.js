import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';// Renomear a BrowserRouter para Router , para nao ter confusão com com a proxima importação Route
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import './App.css';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
