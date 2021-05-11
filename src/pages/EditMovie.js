import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('componente montado');
    this.handleMovie();
  }

  // cahamo novamente, a partir do id do route (param) o função get movie, coloco ela no state para depois passar como props para o MovieForm
  handleMovie = () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    movieAPI.getMovie(id)
      .then((resolve) => this.handleStateMovie(resolve));
  }

  handleStateMovie = (param) => {
    this.setState({
      movie: param,
      status: '',
    });
  }

  // chama a função handleFetch pois queremos que ela chame api e atualize o filme toda vez que eu cliclar no botão
  handleSubmit(updatedMovie) {
    this.handleFetch(updatedMovie);
    // passo como parametro as informações da atulização dque foi pega pelo MovieForm(componente filho)
  }

  // aqui estou chamando a "API" que atualiza o filme e depois que ela "responde" altero a chave shouldRedirect do estado
  handleFetch = (param) => {
    movieAPI.updateMovie(param)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  handleReturn = () => {
    const { shouldRedirect, status, movie } = this.state;

    if (status === 'loading') {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect />;
    }

    return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
  }

  render() {
    return (
      <div data-testid="edit-movie">
        { this.handleReturn() }
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: PropTypes.number,
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
