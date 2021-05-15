import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.requestMovie();
  }
  
  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setState({
      movie: movie,
    });
  }
    
  
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state;

    return (
      <div data-testid="movie-details">
        <h2>{ title }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
