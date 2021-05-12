import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;

    return (
      <div data-testid="movie-card">
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        Movie Card
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string,
  storyline: propTypes.string,
}.isRequired;

export default MovieCard;
