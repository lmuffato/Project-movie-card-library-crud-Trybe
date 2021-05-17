import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.renderedPage();
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      loading: false,
    });
  }

  renderedPage = () => {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect } = this.state;

    if (shouldRedirect) return (<Redirect to="/" />);
    if (loading) return (<Loading />);

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
