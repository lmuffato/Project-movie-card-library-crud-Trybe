import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;

    return (
      <div className="movie-card" data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ `${title}` } />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{storyline}</p>
        </div>
        <div>
          <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
