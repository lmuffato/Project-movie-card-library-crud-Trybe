import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <section data-testid="movie-card" className="movie-card">
        <section className="movie-card-body">
          <img src={ imagePath } alt="" className="movie-card-image" />
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
