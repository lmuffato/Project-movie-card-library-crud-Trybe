import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await getMovies();

        this.setState({
          movies: requestMovies,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <Loading />;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? loadingElement : movies.map(
          (movie) => <MovieCard key={ movie.title } movie={ movie } />,
        )}
      </div>
    );
  }
}

export default MovieList;
