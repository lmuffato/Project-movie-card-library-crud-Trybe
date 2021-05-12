import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath, rating } = movie;
    // const { movie: { title, storyline, id, imagePath } } = this.props;
    return (
      <section data-testid="movie-card">
        Movie Card
        <img alt="Movie Cover" src={ imagePath } />
        <section>
          <h3>{ title }</h3>
          <h4>{ rating }</h4>
          <p>{ storyline }</p>
          <Link to={ `movies/${id}` }> VER DETALHES </Link>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
