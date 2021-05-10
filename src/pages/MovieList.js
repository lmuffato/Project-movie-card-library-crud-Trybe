import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import '../css/movieList.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.fetchArr = this.fetchArr.bind(this);
  }

  componentDidMount() {
    this.fetchArr();
  }

  async fetchArr() {
    const arr = await movieAPI.getMovies();
    this.setState({ movies: arr });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movieList">
        {movies.length > 0 ? movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
