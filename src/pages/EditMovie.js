import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { shape, number } from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { id } = match.params;

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
      id,
    };
  }

  handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchMovie = async () => {
    const { id } = this.state;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      status: ' ',
      movie: getMovie,
    });
  }

  componentDidMount = async () => {
    this.fetchMovie();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    console.log(`${shouldRedirect} bazinga`);
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading loading="Carregando..." />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: shape({
    params: shape({
      id: number,
    }),
  }).isRequired,
};

export default EditMovie;
