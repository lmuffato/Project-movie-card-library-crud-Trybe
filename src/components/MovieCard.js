import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ `../${imagePath}` } alt="movie" width="400px" />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
