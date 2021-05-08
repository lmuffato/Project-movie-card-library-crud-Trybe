import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        {/* <Link to={ id } component={ MovieDetails } /> */}
        {/* <Link to={ MovieDetails } /> */}
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  storyline: PropTypes.string,
}.isRequired;

export default MovieCard;
