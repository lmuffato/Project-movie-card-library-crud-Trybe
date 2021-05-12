import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => (
      this.setState({ shouldRedirect: true })
    ));
  }

  fetchMovie = () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const movieFromAPI = await movieAPI.getMovie(id);
        this.setState({
          movie: movieFromAPI,
          loading: false,
        });
      },
    );
  }

  componentDidMount = () => {
    this.fetchMovie();
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    return (
      <div data-testid="edit-movie">
        {loading
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
        { shouldRedirect ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default EditMovie;
