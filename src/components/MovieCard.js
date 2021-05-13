import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-storyline">{movie.storyline}</p>
        <Link
          to={ `/movies/${movie.id}` }
          className="detail-link"
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
