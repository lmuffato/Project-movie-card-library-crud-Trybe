import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, storyline, imagePath } = movie;
    return (
      <section data-testid="movie-card">
        <p>{ title }</p>
        <img width="300" src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
