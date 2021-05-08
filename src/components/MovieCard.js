import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        Movie Card
        <Link to="movie/:id">DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
