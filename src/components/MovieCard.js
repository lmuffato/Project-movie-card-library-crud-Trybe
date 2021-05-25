import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, rating, title, subtitle, storyline } = movie;
    return (
      <div data-testid="movie-card" key={ id } className="movie-card">
        <Link to={ { pathname: `movies/${id}`, state: id } }>
          <h3>
            { title }
          </h3>
        </Link>
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
