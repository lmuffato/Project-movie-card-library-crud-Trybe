import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // recebe todo o filme
    const { title, storyline, id } = movie; // seleciona o que o requisito 3 pede
    return (
      <section data-testid="movie-card">
        Movie Card
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </section>
    );
  }
}

export default MovieCard;

// requisito 3
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
