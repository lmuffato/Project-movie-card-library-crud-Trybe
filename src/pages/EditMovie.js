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
    console.log(this.props);
    this.handleMovie();
    // this.handleFetch();
  }

  // aqui estou chamando a "API" e depois que ela "responde" altero a chave shouldRedirect do estado
  handleFetch = () => {
    const { movieForm } = this.state;
    movieAPI.updateMovie(movieForm)
      .then(this.setState({
        shouldRedirect: true,
      }));
  }

  // cahamo novamente, a partir do id do route (param) o função get movie, coloco ela no state para depois passar como props para o MovieForm
  handleMovie = () => {
    // const { match: { params: { id } } } = this.props;
    const { match } = this.props;
    const { id } = match.params;
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

  // coloca o conteudo do formulario dentro do estado, updateMovie é um obejeto com varias chaves
  handleSubmit(updatedMovie) {
    this.setState({
      movieForm: updatedMovie,
    });
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

  // handleRedirect = () => {
  //   const { shouldRedirect } = this.state;
  //   if (shouldRedirect) {
  //     return <Redirect />;
  //   }
  // }

  render() {
    return (
      <div data-testid="edit-movie">
        { this.handleReturn() }
        {/* { this.handleRedirect() } */}
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: PropTypes.number,
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
