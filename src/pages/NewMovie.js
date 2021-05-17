import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      movies: [],
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    const { movies } = this.state;
    movieAPI.createMovie(newMovie).then(() => this.setState({
      movies,
      redirect: true,
    }));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return (<Redirect to="/" />);
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
