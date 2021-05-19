import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchMovie = this.fetchMovie.bind(this); // não é necessário fazer o "bind" (?)
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie() {
    // console.log(this.props);
    this.setState({ status: 'loading' }); // loading antes da requisição da "api"

    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const filme = await movieAPI.getMovie(id);
    // console.log(filme);
    this.setState({
      status: '', // sem loading depois do retorno da "api"
      movie: filme,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />; // se for true, redireciona para "/"

    if (status === 'loading') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.defaultProps = {
  match: {},
};

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
};

export default EditMovie;
