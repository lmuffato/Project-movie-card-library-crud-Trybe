import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchedApi();
  }

  handleSubmit = async (updatedMovie) => {
    const updatedMovies = await movieAPI.updateMovie(updatedMovie);
    if (updatedMovies === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  fetchedApi = async () => {
    const { match: { params: { id } } } = this.props;
    const api = await movieAPI.getMovie(id);
    console.log(api);
    this.setState({
      movie: api,
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
