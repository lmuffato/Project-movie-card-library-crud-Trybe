import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle,
      storyline, imagePath, rating, genre } } = this.props;
    return (
      <div data-testid="movie-card">
        <span className="movieId" style={ { display: 'none' } }>{id}</span>
        <img src={ imagePath } alt={ title } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{genre}</p>
        <span>{rating}</span>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieCard;
