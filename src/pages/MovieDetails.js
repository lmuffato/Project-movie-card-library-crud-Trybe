import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    // aqui estou pegadno o id que foi passado como props no <Link to={ `/movies/${id}` }>VER DETALHES</Link>
    // também estou chamando a api novamente para pegar todos os dados dos movies novamente
    console.log(this.props);
    movieAPI.getMovie(id)
      .then((resolve) => this.handleMovies(resolve));
  }

  handleMovies = (param) => {
    this.setState({
      movie: param,
      loading: false,
    });
    console.log(this.state);
  }

  handleDelete = () => {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  handleReturn = () => {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    console.log(movie);

    if (loading) {
      console.log(loading);
      return <Loading />;
    }

    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="content">
          <h2>{ `Subtitle: ${title}` }</h2>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <button type="button">
            <Link className="link" to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
          </button>
          <button type="button">
            <Link className="link" to="/">VOLTAR</Link>
          </button>
          <button type="button" onClick={ this.handleDelete }>
            <Link className="link" to="/">DELETAR</Link>
          </button>
        </div>
      </div>
    );
  }

  render() {
    // Change the condition to check the state

    return (
      <section>
        { this.handleReturn() }
      </section>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
