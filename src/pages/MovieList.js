import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    this.handleFecht();
  }

  handleFecht = async () => {
    this.setState({ loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: [...getMovies],
          loading: false,
        });
      });
  }

  render() {
    const { movies } = this.state;
    const { loading } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div className="movie-list" data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
