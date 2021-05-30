import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUpdate = this.fetchUpdate.bind(this);

    this.state = {
      movie: {},
      status: '',
    };
  }

  componentDidMount() {
    this.fetchUpdate();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchUpdate() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState(
      { status: 'loading' },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);

        this.setState({
          movie: requestMovie,
          status: '',
          shouldRedirect: false,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
