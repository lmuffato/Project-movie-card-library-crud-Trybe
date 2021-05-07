import React, { Component } from 'react';
import { shape, number } from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Details from '../components/Details';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

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

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading />
          : <>
            <Details movie={ movie } />
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            </>}
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
