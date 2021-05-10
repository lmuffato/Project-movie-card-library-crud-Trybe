import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Deatail';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.fetchArr();
  }

  async fetchArr() {
    const { match } = this.props;
    const object = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: object });
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="movie-details" className="movieDetails">
        {movie === '' ? <Loading /> : <Detail movie={ movie } /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number.isRequired }),
  }).isRequired,
};

export default MovieDetails;
