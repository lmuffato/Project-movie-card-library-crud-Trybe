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
        <header>
          <h1>Movie Cards Library</h1>
          <Link className="headerLink link" to="/movies/new">Adicionar Cartão</Link>
        </header>
        <div className="flex">
          {this.handleReturn()}
        </div>
      </div>
    );
  }
}

export default MovieList;
