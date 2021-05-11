import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="page-title">MOVIE CARD LIBRARY CRUD</div>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;

// Link para exemplo na documentação sobre uso de path="*" para Page Not Found --> https://reactrouter.com/web/example/no-match
// Referência sobre Router, Link, etc, nesta thread do slack:
// --> https://trybecourse.slack.com/archives/C01L16B9XC7/p1620328996270100?thread_ts=1620328884.267200&cid=C01L16B9XC7
// Link para o vídeo mencionado na thread:
// https://www.youtube.com/watch?v=Law7wfdg_ls&feature=youtu.be
