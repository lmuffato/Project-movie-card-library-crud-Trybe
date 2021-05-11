import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFund from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFund } />
      </BrowserRouter>
    );
  }
}

export default App;
