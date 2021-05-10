import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: 0,
      // title: '',
      // subtitle: '',
      // storyline: '',
      // rating: 0,
      // imagePath: '',
      // bookmarked: '',
      // genre: '',
    };
  }

  render() {
    const { movie } = this.props;
    const { storyline, title, id } = movie;
    const movieId = `movies/${id}`;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ movieId }>
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
