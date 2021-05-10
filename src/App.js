import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
