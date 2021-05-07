import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.callMovies();
  }

  callMovies = async () => {
    const { getMovies } = movieAPI;
    try {
      const response = await getMovies();
      this.setState({
        isLoaded: true,
        movies: [...response],
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movies, isLoaded } = this.state;

    return (
      <div className="movie-list" data-testid="movie-list">
        {!isLoaded ? <Loading />
          : movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

export default MovieList;
