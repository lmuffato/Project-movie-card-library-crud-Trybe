import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(newMovie) {
   await movieAPI.createMovie(newMovie);
   this.setState({
     redirectTo: true,
   });
  }

  render() {
      const { redirectTo } = this.state;
        if(redirectTo) {
          return <Redirect to="/" />
        }
        return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
