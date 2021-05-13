import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';
// Projeto Realizado com ajude de:
// Pollyana Oliveira - Turma 10 - Tribo A
// Luan Ramalho - Turma 10 - Tribo A
// Rafael Medeiros - Turma 10 - Tribo A
// Vinicius Rodrigues - Turma 10 - Tribo A
// Lucas Muniz Lara - Turma 10 - Tribo A
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
