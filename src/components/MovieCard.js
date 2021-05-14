import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie:
      { genre, rating, subtitle, imagePath, storyline, title, id } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ imagePath } alt={ `foto ${title}` } />
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape,
}.isRequired;

export default MovieCard;
