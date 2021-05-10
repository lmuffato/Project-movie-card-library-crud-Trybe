import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // ao invés de utilizar status: 'loading'
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this); // nativo
  }

  // após ser carregado, seleciona o filme a ser editado
  // o filme já foi carregado, por isso loading false
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // requisição de um único filme
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, loading: false }));
  }

  // updateMovie - recebe um filme a ser atualizado
  // deve exibir Loading enquanto estiver fazendo a requisição
  // quando terminar de fazer a requisição o Loading deve parar,
  // por isso utilizei loading: false, pois já terminou a requisição
  handleSubmit(updatedMovie) { // função nativa
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
  }

  // ou:
  // async handleSubmit(updatedMovie) {
  //   const { updateMovie } = movieAPI;
  //   await updateMovie(updatedMovie);
  //   this.setState({ shouldRedirect: true });
  // }

  render() {
    const { loading, shouldRedirect, movie } = this.state; // nativo
    // nativo - a inteção é enviar para outra página para fazer a edição do filme
    if (shouldRedirect) return <Redirect to="/" />; // requisito 5

    // if (status === 'loading') { // nativo - Exibe o texto Loading equanto estiver fazendo a requisição
    if (loading) return <Loading />; // requisito 5

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
