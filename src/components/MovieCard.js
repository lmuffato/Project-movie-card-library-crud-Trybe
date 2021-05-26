import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" alt="Movie Cover" src={ imagePath } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <button type="button">
            <Link
              to={ {
                pathname: `/movies/${id}`,
                state: { id },
              } }
            >
              VER DETALHES
            </Link>
          </button>
        </div>
        <div className="movie-card-rating">
          Avaliação
          <div className="rating">{ rating }</div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
