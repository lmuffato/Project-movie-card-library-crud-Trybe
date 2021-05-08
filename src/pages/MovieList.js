import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((resolve) => this.handleMovies(resolve));
  }

  handleMovies = (param) => {
    this.setState({
      movies: param,
      loading: false,
    });
    console.log(this.state);
  }

  handleReturn = () => {
    const { loading, movies } = this.state;
    if (loading) {
      return <Loading />;
    }
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    // Render Loading here if the request is still happening
    console.log(this.props);
    return (
      <div data-testid="movie-list">
        {this.handleReturn()}
      </div>
    );
  }
}

export default MovieList;
