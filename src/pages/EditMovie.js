import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { object, number } from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

// alguns trechos deste componente foi feito com ajuda da consulta feita no PR #79 do Marcuscps19
class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
  }

  handleSubmit = (updatedMovie) => {
    this.setState({
      shouldRedirect: false,
    }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  fetchMovie = async () => {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);
    this.setState({
      status: 'updated',
      movie,
    });
  }

  componentDidMount = async () => {
    this.fetchMovie();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading loading="Carregando..." />;
    }

    return (
      <div data-testid="edit-movie">
        <h1>EDITAR FILME</h1>
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  movie: object,
  id: number,
}.isRequired;

export default EditMovie;
