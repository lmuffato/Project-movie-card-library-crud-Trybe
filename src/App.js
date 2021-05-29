import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* Agradecimentos:
  Gostaria de agradecer o meu amigo Leonardo Mallmann(Turma 10 - Trybo A) pela aula que me deu e por me
  guiar do primeiro ao último requisito deste projeto, sem o auxilio dele eu não teria adquirodo
  o conhecimento para concluir cada etapa.

  https://github.com/mallmann02
*/
