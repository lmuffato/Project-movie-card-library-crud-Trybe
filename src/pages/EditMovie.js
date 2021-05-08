import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);

    this.state = {
      movie: '',
      shouldRedirect: false,
      status: '',
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const obj = result.find((m) => m.id === parseInt(id, 10));
    this.setState({ movie: obj });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        { movie ? <Loading show={ false } /> : <Loading show /> }
        { movie ? <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> : ''}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
