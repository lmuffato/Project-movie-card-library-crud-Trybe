import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loaded: true,
    };
  }

  async getList() {
    const getMovies = await movieAPI.getMovies();
    this.setState({movies: getMovies, loaded: false}) 
  }

  componentDidMount() {
    this.getList()
  }
  
  render() {
    const { movies, loaded } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loaded ? <Loading /> : movies.map((movie) => 
          <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
