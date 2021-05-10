import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { match } = this.props;
    const { id } = match.params;

    const movies = await movieAPI.getMovie(id);
    this.setState({
      movies,
      loading: false,
    });
  }

  structureDetails({ title, storyline, imagePath, genre, rating, subtitle }) {
    const { match } = this.props;
    const { id } = match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        { (loading) ? <Loading /> : this.structureDetails(movies) }
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
