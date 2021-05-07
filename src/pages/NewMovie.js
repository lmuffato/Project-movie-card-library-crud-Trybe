import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      redirect: true,
    });
  }

  conditional = () => {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
        {this.conditional()}
      </div>
    );
  }
}
export default NewMovie;
