import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
    this.deleteMovies = this.deleteMovies.bind(this);
    this.loadMovie = this.loadMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, () => {
      movieAPI
        .getMovie(id)
        .then((item) => this.setState({
          movie: item,
          loading: false,
        }));
    });
  }

  async deleteMovies() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteMovies() }>DELETAR</Link>

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
