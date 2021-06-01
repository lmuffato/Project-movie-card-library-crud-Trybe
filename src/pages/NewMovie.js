import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    // consultei repositorio para uma ajuda ,
    // https://github.com/tryber/sd-010-b-project-movie-card-library-crud/blob/jessica-schulze--project-movie-card-library-crud/src/pages/NewMovie.js
    const { history } = this.props;
    movieAPI.createMovie(newMovie);
    history.push('/');
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

export default NewMovie;
