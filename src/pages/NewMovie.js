import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const newMov = await movieAPI.createMovie(newMovie);
    this.setState({
      status: newMov,
    });
    return newMov;
  }

  render() {
    const { status } = this.state;
    if (status === 'OK') {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <h1>Adicionar novo filme</h1>
        <MovieForm onSubmit={ this.handleSubmit } />
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default NewMovie;
