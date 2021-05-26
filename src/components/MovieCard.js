import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath, bookmarked, genre } = movie;
    return (
      <div data-testid="movie-card">
        <p>{`${title}`}</p>
        <p>{`${subtitle}`}</p>
        <p>{`${storyline}`}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
