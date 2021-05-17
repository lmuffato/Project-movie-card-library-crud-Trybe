import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    // console.log(this.props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const filme = await movieAPI.getMovie(id);
    console.log(filme);
    this.setState({
      movies: filme,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div data-testid="movie-details">

        <p>{`Title: ${title}`}</p>

        <img alt="Movie Cover" width="250px" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
