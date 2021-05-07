import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" id="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <div className="movie-card-body">
          {/* <h5 className="movie-card-subtitle">{subtitle}</h5> */}
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
  }).isRequired,
};

export default MovieCard;
