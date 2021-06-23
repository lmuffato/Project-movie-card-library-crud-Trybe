import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
// import { Link, Route, BrowserRouter, Router } from 'react-dom';
import './App.css';
import Copyright from './components/Copyright';

function App() {
  return (
    <Router>
      <header className="container">
        <h1 className="display-2">Movie Card Library CRUD</h1>
      </header>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <footer className="footer-class text-muted">
        <Copyright />
      </footer>
    </Router>
  );
}
export default App;
