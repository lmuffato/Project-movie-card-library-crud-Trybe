import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, EditMovie, NewMovie, MovieDetails } from './pages';

function App() {
  return (
    
    <BrowserRouter>
      <Route path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
    </BrowserRouter>

// Será validado se qualquer rota não declarada renderiza a página NotFound
  );
}

export default App;
