import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, imagePath, rating, title, subtitle, storyline } } = this.props;
    return (
      <div data-testid="movie-card" key={ id } className="movie-card">
        <h3>
          { title }
        </h3>
        <h4>
          { subtitle }
        </h4>
        <img src={ imagePath } alt={ title } />
        <p>
          {storyline}
        </p>
        <p>
          { rating }
        </p>
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
