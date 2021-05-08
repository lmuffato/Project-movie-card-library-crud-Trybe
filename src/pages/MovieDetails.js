import React, { Component } from 'react';
import { shape, number } from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Details from '../components/Details';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    this.setState({
      movie,
      loading: false,
    });
  }

  deleteMovie = async () => {
    const { movie: { id } } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div data-testid="movie-details">
        {
          loading ? <Loading />
            : <Details movie={ movie } id={ movie.id } onClick={ this.deleteMovie } />
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
