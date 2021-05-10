import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.renderMovies = this.renderMovies.bind(this);
    this.state = {
      stateLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.renderMovies();
  }

  async renderMovies() {
    this.setState(
      { stateLoading: true },
      async () => {
        const requestMovies = await getMovies();
        this.setState(({ movies }) => ({
          movies: [...movies, ...requestMovies],
          stateLoading: false,
        }));
      },
    );
  }

  render() {
    const { movies, stateLoading } = this.state;

    // Render Loading here if the request is still happening
    const renderList = stateLoading ? <Loading /> : movies.map((movie) => {
      const { title, subtitle, storyline, rating, imagePath, id } = movie;
      return (
        <MovieCard
          key={ title }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
          id={ id }
        />
      );
    });
    return (
      <div data-testid="movie-list">
        {
          renderList
        }
      </div>
    );
  }
}

export default MovieList;
