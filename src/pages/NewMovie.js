import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      bookmarked: '',
      genre: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ [...this.state] } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
