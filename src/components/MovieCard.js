import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css'

class MovieCard extends React.Component {
  render() {
    const {movie} = this.props
    const {title, storyline, id, imagePath, rating} = movie
    return (
        <div data-testid="movie-card"> 
          <h2 className = 'title'> {title} </h2>
          <img src = {imagePath} alt = 'movieCover'/> <br />
          <h3 className = 'storyline'> {storyline} </h3>
          <h4 className = 'rating'> {rating} </h4>
          <Link className = 'details' to = {`/movies/${id}`}> VER DETALHES </Link>
        </div>
    );
  }
}

export default MovieCard;
