import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <div><img src={ imagePath } width="300px" alt="Capa" /></div>
        <div>{ title }</div>
        <div>{ storyline }</div>
        <div><Link to={ `movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
