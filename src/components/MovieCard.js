import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    id: Proptypes.number,
    title: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
  }),
}.isRequired;

export default MovieCard;
