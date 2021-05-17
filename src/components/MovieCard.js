import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagepath, genre, id } = movie;
    return (
      <div data-testid="movie-card">
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagepath: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagepath: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MovieCard;
