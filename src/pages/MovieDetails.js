import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const response = await movieAPI.getMovie(params.id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  async deleteMovie() {
    const { match } = this.props;
    const { params } = match;
    const response = await movieAPI.deleteMovie(params.id);
    return console.log(response);
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    const loadingElement = <Loading />;

    if (loading) {
      return loadingElement;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to="/" onClick={ () => this.deleteMovie() }>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
