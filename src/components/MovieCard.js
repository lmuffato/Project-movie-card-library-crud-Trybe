import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div data-testid="movie-card">
          <img src={ movie.imagePath } alt={ `Imagem de ${movie.title}` } />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <h4>{movie.subtitle}</h4>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
