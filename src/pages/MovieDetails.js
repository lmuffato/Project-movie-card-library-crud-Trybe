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
    this.movieFromApi();
  }

  async movieFromApi() {
    const { match } = this.props;
    const { params } = match;
    const movieFromApi = await movieAPI.getMovie(params.id);
    this.setState({
      movie: movieFromApi,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { id, imagePath, title, subtitle, storyline, genre, rating } = movie;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link onClick={ async () => movieAPI.deleteMovie(id) } to="/">
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
