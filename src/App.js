import React from 'react';
import BrowserRouter from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path='/movies/:id' component={MovieDetails} />
      <Route path='/movies/new' component={NewMovie} />
      <Route path='/movies/:id/edit' component={EditMovie} />
      <Route path='/' component={MovieList} />
      <Route path='/:other' component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
