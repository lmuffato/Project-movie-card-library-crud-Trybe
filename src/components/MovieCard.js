import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <div className="movie-card-body">
            <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
            <p className="movie-card-storyline">{storyline}</p>
          </div>
          <div>
            <Link to={ `/movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
