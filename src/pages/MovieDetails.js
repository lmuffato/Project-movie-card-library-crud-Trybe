import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.getMovieApi = this.getMovieApi.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: '',
      loading: true,
      movieId: 0,
    };
  }

  componentDidMount() {
    this.getMovieApi();
  }

  getMovieApi() {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const crrMovie = await getMovie(id);
        this.setState({
          movie: crrMovie,
          loading: false,
          movieId: id,
        });
      },
    );
  }

  deleteMovie() {
    const { deleteMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    deleteMovie(id);
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { movieId } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={`/${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${movieId}/edit`}>EDITAR</Link>
        <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderMovie()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
