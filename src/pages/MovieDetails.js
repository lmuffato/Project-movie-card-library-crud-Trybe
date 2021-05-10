import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';
import MovieSinglePage from '../components/MovieSinglePage';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isLoading: true,
    };

    this.request = false;

    this.requestMovieInfo = this.requestMovieInfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.request = true;
    this.requestMovieInfo();
  }

  componentWillUnmount() {
    this.request = false;
  }

  async requestMovieInfo() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    if (this.request) {
      const movie = await getMovie(id);
      this.setState({
        movie,
        isLoading: false,
      });
    }
  }

  deleteCard() {
    const { deleteMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    deleteMovie(id);
  }

  render() {
    const { movie, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details" className="movie-page">
        <MovieSinglePage movie={ movie } deleteCard={ this.deleteCard } />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
