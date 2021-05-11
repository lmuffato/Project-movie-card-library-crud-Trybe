import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath, rating, genre } } = this.props;
    return (
      <div data-testid="movie-card">
        <span className="movieId" style={{display: 'none'}}>{id}</span>
        <img src={imagePath} alt={title} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{genre}</p>
        <span>{rating}</span>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
