import React, { Component } from 'react';
import { Redirect } from 'react-router';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleSetState();
  }

  handleSetState = () => {
    this.setState({
      status: 'loade',
    });
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect } = this.state;
    if (shouldRedirect) return (<Redirect to="/" />);
    if (status === 'loading') return (<Loading />);
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
