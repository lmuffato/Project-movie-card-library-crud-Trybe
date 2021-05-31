import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie Card Library CRUD</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
