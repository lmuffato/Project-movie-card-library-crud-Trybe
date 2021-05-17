import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/ciclo-de-vida-de-componentes/36f2a45f-a7c0-4f6f-ae29-119286c4dce9/conteudos/6ff97820-f288-46e1-8a76-b870cb9f4402/renderizacao-condicional-e-atualizacao-de-arrays-no-estado/60fd32b9-3c45-4efa-a2e0-23c54e8bdac1?use_case=side_bar
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();

        this.setState({
          loading: false,
          movies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="home-container">
        <header>
          <h1>Movie Library</h1>
          <button type="button">
            <Link to="/movies/new">
              ADICIONAR CARTÃO
            </Link>
          </button>
        </header>

        <main>
          <ul data-testid="movie-list">
            {
              loading ? <Loading />
                : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default MovieList;
