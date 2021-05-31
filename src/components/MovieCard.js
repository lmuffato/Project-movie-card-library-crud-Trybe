import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     movie: {},
  //   };
  // }

  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p>
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

// solução encontrado com base no código de LUCAS MUFFATO
// e consulta ao material do trybe course na aula de Proptypes.
MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
  }),
}.isRiquered;
