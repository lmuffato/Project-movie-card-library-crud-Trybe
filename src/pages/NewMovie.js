import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    const newMovieAdded = await movieAPI.createMovie(newMovie);
    this.setState({ status: newMovieAdded });
  }

  render() {
    const { status } = this.state;
    if (status === 'OK') {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <h1>Novo Filme</h1>
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
