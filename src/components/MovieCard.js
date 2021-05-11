import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;// const { movie: { title, storyline, id } } = this.props; de ser feita essa descontrução, mais ainda não aprendi como funciona

    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape(propTypes.object),
  title: propTypes.string,
  storyline: propTypes.string,
}.isRequired;

export default MovieCard;
