import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/NavBar';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import { themes } from './styles/variables';

function App() {
  const [currentTheme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = themes[currentTheme].background;
  }, [currentTheme]);

  return (

    <ThemeProvider theme={ themes[currentTheme] }>
      <Navbar
        toggleTheme={ () => setTheme((theme) => (theme === 'light' ? 'dark' : 'light')) }
        theme={ currentTheme }
      />
      <main>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>

          <Route path="/movies/new">
            <NewMovie />
          </Route>

          <Route path="/movies/:id/edit">
            <EditMovie />
          </Route>

          <Route path="/movies/:id">
            <MovieDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
