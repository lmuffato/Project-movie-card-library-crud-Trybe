import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.loading = true;

    this.state = {
      loading: true,
      movie: [],
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async componentDidMount() {
    this.loading = false;
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.fetchMovie(movie);
  }

  componentWillUnmount() {
    this.setState = () => {
      this.loading = false;
    };
  }

  fetchMovie(movie) {
    this.setState({ loading: true }, () => {
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { loading, movie } = this.state;
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <h2>{ title }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MovieDetails;
