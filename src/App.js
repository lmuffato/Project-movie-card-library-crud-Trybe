import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        {/* // https://ultimatecourses.com/blog/react-router-not-found-component  aprendi sobre rota NotFound */}
        <Route component={ NotFound } />
        <div>Movie Card Library CRUD</div>
      </Switch>
    </Router>
  );
}

export default App;
