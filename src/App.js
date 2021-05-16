import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie Card Library CRUD</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route
              exact
              path="/movies/:id"
              render={ (props) => (<MovieDetails
                { ...props }
              />) }
            />
            <Route
              exact
              path="/movies/:id/edit"
              render={ (props) => (<EditMovie
                { ...props }
              />) }
            />
            <Route component={ NotFound } />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;

// Fonte: https://medium.com/@benkissi/how-to-create-a-not-found-page-in-react-95381566271d
