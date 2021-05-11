// feito com auxilio:
// Iago Ferreira - Turma 10 - Tribo A
// Rafael Medeiros - Turma 10 - Tribo A
// Guilherme Dornelles - Turma 10 - Tribo A
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ title }</h2>
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
