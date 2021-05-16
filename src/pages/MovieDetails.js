import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: true,
    };
  }


  async getMovie() {
    const { match} = this.props
    const { params: { id } } = match;
    const getID = await movieAPI.getMovie(id);
    this.setState({ movies: getID, loaded: false}) 
  }

  componentDidMount() {
    this.getMovie()
  }

  render() { 
    
    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies
    const { loaded } = this.state;

    return (
      loaded ? <Loading/> : (
      <div data-testid="movie-details">

        <img src = {`../${imagePath}`} alt = 'Movie Cover'/> 
        <p> { `Title: ${title}` } </p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <button type = 'button'>  
          <Link to = { `/movies/${id}/edit`}> EDITAR </Link>
        </button>
        
        <button type = 'button'>  
          <Link to = "/" > VOLTAR </Link>
        </button>

      </div>
      )
    );
  }
}

export default MovieDetails;
