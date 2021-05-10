import React from 'react';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';

class MovieCard extends React.Component {
  render() { 

    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;

    return (
      <div data-testid="movie-card"> 
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <img src={imagePath} />
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
