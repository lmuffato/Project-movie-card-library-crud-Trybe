import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <p>{ id }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
    id: Proptypes.number,
  }).isRequired,
};

export default MovieCard;
