import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.findShowMovies();
  }

  findShowMovies = async () => {
    const { getMovies } = movieAPI;
    this.setState({
      movies: await getMovies(),
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <section>
        <Loading />
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </section>
    );
  }
}

export default MovieList;
