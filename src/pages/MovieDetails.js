import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  // constructor() {
  //   super();

  //   this.getAllMovies = this.getAllMovies.bind(this);

  //   this.state = {
  //     movies: [],
  //     loading: false,
  //   };
  // }

  // componentDidMount() {
  //   this.getAllMovies();
  // }

  // getAllMovies() {
  //   this.setState({ loading: true }, async () => {
  //     const allMovies = await movieAPI.getMovies();
  //     this.setState((previousState) => ({
  //       movies: [...previousState.movies, ...allMovies],
  //       loading: false,
  //     }));
  //   });
  // }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
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
