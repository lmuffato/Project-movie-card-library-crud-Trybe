import React, { Component } from 'react';

// import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(newMovie) {
  // }

  render() {
    return (
      <div data-testid="new-movie">
        {/* <MovieForm onSubmit={ this.handleSubmit } /> */}
        <h1>New movie</h1>
      </div>
    );
  }
}
export default NewMovie;
