import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, EditMovie, NewMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>

  // Será validado se qualquer rota não declarada renderiza a página NotFound
  );
}

export default App;
