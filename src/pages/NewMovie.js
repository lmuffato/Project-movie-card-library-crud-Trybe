import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true },
      async () => {
        await movieAPI.createMovie(newMovie);
        this.setState({
          redirect: true,
          loading: false,
        });
      });
  }

  render() {
    const { loading, redirect } = this.state;

    if (loading) {
      return <Loading message="Adicionando filme no banco de dados..." />;
    }

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
