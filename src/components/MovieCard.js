import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h2>
          { movie.title }
        </h2>
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <div className="storyline">
          <p>
            { movie.storyline }
          </p>
        </div>
        <Link to={ `/movies/${movie.id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
