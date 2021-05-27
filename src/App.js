import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';// Renomear a BrowserRouter para Router , para nao ter confusão com com a proxima importação Route
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/*" component={ NotFound } />
    </Router>// Routh path="/*" o asterisco significa que para todos os caminhos ele dará notfound já que os outros caminhos tem o exact para funcionar
  );
}

export default App;
