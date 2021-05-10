import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
  }

  render() {
    const emptyMovie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } movie={ emptyMovie } />
      </div>
    );
  }
}
export default NewMovie;
