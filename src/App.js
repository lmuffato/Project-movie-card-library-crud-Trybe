import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="titulo">Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
