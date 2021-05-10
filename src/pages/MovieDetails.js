import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };
  }

  fetchApi = () => {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          movie,
          loading: false,
        });
      },
    );
  }

  deleteMovie = () => {

  }

  componentDidMount = () => {
    this.fetchApi();
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { loading } = this.state;
    const { movie: { title, storyline, imagePath,
      genre, rating, subtitle } } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ async () => movieAPI.deleteMovie(id) }>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
