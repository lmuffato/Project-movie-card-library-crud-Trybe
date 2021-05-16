import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>

      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: [],
};

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  // movie: propTypes.object,
};

export default MovieCard;
