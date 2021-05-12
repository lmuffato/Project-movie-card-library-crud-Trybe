import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { genre, rating, subtitle, imagePath, storyline, title, id } = movie;

    return (
      <div data-testid="movie-card" className="movie-card movie-card-body">
        <img src={ imagePath } alt={ `foto ${title}` } />
        <h1 className="movie-card-title">{ title }</h1>
        <h3 className="movie-card-subtitle">{ subtitle }</h3>
        <p className="movie-card-storyline">{ storyline }</p>
        <p>{ genre }</p>
        <p className="movie-card-rating rating">{ rating }</p>
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
