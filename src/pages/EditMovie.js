import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const { params } = match;

    this.state = {
      id: params.id,
      movie: {},
      status: '',
      shouldRedirect: false,
    };
    this.loadMovie = this.loadMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: true }, () => {
      movieAPI.updateMovie(updatedMovie).then();
    });
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie() {
    this.setState({ status: 'loading' }, async () => {
      const { id } = this.state;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        status: '',
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading message="Carregando..." />;
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
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
