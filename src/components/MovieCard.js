import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { genre, rating, subtitle, imagePath, storyline, title, id } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `foto ${title}` } />
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <Link to={ `/movies/${id}` }>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.string,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.string,
  genre: PropTypes.string,
}.isRequired;

export default MovieCard;
