// requisito 1 refeito após conversa com Guilherme Dugaich
// quando fui ajudá-lo e identificamos a falha na
// construção do requisito apesar de aprovado

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

// referência para component NotFound visto no repositório
// do João Nascimento - https://github.com/tryber/sd-010-a-project-movie-card-library-crud/pull/65
// troca da ordem das rotas indicada pelo Wanderson Sales
// em uma call para passar os requisitos 1 e 6 que tinham quebrado
export default function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
