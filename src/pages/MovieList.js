import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <div data-testid="movie-list" className="movieList">
        {movies
          .length ? <Link className="new" to="/movies/new">ADICIONAR CARTÃO</Link> : ''}
        {movies
          .length ? movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          )) : <Loading />}
      </div>
    );
  }
}

export default MovieList;
