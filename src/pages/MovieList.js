import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const { movies } = this.state;
    const loadedMovies = await movieAPI.getMovies();
    movies.push(...loadedMovies);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <div data-testid="movie-list" className="movie-list">
          {movies.length > 0 ? movies
            .map((movie) => (<MovieCard
              key={ movie.id }
              movie={ movie }
            />)) : <Loading />}
        </div>
        <div>
          <Link to="/movies/new">
            <button type="button"> New Movie </button>
          </Link>
        </div>
      </>
    );
  }
}

export default MovieList;
