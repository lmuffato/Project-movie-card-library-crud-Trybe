import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

export default class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.buildMovieDetails();
  }

  // --- solução encontrada por 'Paulo Eliezer' e adaptada a este projeto
  async buildMovieDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      movie: await movieAPI.getMovie(id),
    });
  }

  // --- fim do comentário.

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        {title === undefined ? <Loading /> : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h3>{ `Title: ${title}` }</h3>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={ () => { movieAPI.deleteMovie(id); } }>DELETAR</Link>
          </div>)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
