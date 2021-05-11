import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagepath, genre, id } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h3>{title}</h3>
        <img src={ imagepath } alt={ `Foto de ${title}` } />
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
