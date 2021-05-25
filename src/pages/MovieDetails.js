import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = async () => {
    const { location: { state } } = this.props;
    let { movie } = this.state;
    movie = await movieAPI.getMovie(state);
    console.log(movie);
    this.setState({ movie });
    return movie;
  }

  fetchData = () => {
    const { movie } = this.state;
    if (movie !== ('' || undefined)) {
      const { imagePath, subtitle, storyline, genre, rating } = movie;
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

  render() {
    const { movie } = this.state;
    return (movie !== '' ? this.fetchData() : <Loading />);
  }
}

export default MovieDetails;
