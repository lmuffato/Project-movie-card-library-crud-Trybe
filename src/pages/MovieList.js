import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.gettingMovies = this.gettingMovies.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.gettingMovies();
  }

  async gettingMovies() {
    const { getMovies } = movieAPI;
    const moviesGotten = await getMovies();
    console.log(moviesGotten);
    this.setState({
      movies: moviesGotten,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length === 0
          ? <Loading />
          : movies
            .map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

export default MovieList;
