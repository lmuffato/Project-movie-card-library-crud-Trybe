import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // {//newMovie é parametro de handlesubmit}

  handleSubmit() {
    console.log('test');
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
