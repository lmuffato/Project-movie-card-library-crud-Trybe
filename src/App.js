import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';// Renomear a BrowserRouter para Router , para nao ter confusão com com a proxima importação Route
import { MovieDetails, MovieList, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
