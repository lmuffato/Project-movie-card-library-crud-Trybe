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
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    if (id === undefined) {
      return;
    }
    console.log(id);
    this.fetchApi(id);
  }

  async fetchApi() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie: data });
  }

  render() {
    const { movie, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <button type="button">
            <Link to="/">
              VOLTAR
            </Link>
          </button>
          <button type="button">
            <Link to={ `/movies/${id}/edit` }>
              EDITAR
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
