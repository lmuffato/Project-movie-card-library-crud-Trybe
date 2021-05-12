import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { union } from '../fp-library/union';

const Type = union('loading', 'loaded');

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      status: Type.loading,
    };
  }

  componentDidMount = () => this.fetchData()

  fetchData = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: Type.loading }, () => {
      getMovie(id).then((movie) => {
        this.setState({ movie, status: Type.loaded });
      });
    });
  }

  createMovieDetails = ({ imagePath, id, title, subtitle, storyline, genre, rating }) => (
    <section data-testid="movie-details">
      {/* img src fix graças a Lucas Pedroso */}
      <img alt="Movie Cover" src={ `/${imagePath}` } />
      <h2>{ `Title: ${title}` }</h2>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <button type="button">
        <Link to="/">VOLTAR</Link>
      </button>
      <button type="button">
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </button>
      <button type="button" onClick={ () => deleteMovie(id) }>
        <Link to="/">DELETAR</Link>
      </button>
    </section>
  )

  render = () => {
    const { movie, status } = this.state;
    return status.match({
      loading: <Loading />,
      loaded: this.createMovieDetails(movie),
    });
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }),
}.isRequired;

export default MovieDetails;
