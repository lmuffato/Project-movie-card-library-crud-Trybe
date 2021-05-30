import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    const newMovie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };

    return (
      <div data-testid="new-movie">
        <MovieForm movie={ newMovie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
