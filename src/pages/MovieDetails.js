import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    // REQUISITO 4
    this.state = {
      movie: '',
    };
  }

  // estamos trabalhando link, por essa razão, para rotas, acrescenta o match
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({ movie: result }));
  }

  // requisito 7
  async handleDelete(removeMovie) {
    await movieAPI.deleteMovie(removeMovie);
  }

  render() {
    const { movie } = this.state;
    if (!movie) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    // POR QUE DÁ ERRO DESSA FORMA???
    // const { movie: { id, title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    // if (!this.state) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        {/* Requisitp 7 - Voltar e Deletar */}
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.handleDelete(id) }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
