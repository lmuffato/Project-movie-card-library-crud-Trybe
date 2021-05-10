import React from 'react';
import '../css/movieCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card" className="card">
        <div className="image">
          <img src={ movie.imagePath } alt={ movie.title } />
          <p className="paragraf">{ movie.title }</p>
        </div>
        <div className="storyline">
          <p>{ movie.storyline }</p>
        </div>
        <div className="link">
          <Link to="/movies/:id">Ver Detalhes</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
