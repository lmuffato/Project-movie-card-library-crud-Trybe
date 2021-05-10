import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    this.setMovies();
  }

  setMovies = async () => {
    const moviesList = await getMovies();
    this.setState({ movies: moviesList });
  }

  mountPage = () => {
    const { movies } = this.state;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movieList">
        {
          movies.length === 0
            ? <Loading />
            : this.mountPage()
        }
      </div>
    );
  }
}

export default MovieList;
