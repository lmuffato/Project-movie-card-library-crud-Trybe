import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
      id: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie = async () => {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          movie,
          loading: false,
          id,
        });
      },
    );
  }

  renderDivOrLoading() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, id } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderDivOrLoading() }
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button" onClick={ this.deleteMovie }>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
