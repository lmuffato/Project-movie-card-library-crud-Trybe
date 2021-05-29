import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState({ loading: true }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        loading: false,
        shouldRedirect: true,
      });
    });
  }

  fetchAPI = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  };

  componentDidMount = () => {
    this.fetchAPI();
  };

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    const { match: { params: { id } } } = this.props;
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        <Link onClick={ async () => movieAPI.deleteMovie(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

export default EditMovie;
