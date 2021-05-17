import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, imagePath, rating, storyline } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ imagePath } alt={ `Capa do filme ${title}` } />
        <div>{ title }</div>
        <div>{ rating }</div>
        <div>{ storyline }</div>
        <div><Link to={ `movies/${id}` }>VER DETALHES</Link></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
