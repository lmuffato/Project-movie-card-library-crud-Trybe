import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Proptypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      redirect: false,
      movie: {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        genre: '',
        rating: 0,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({ redirect: true });
  }

  async getMovie() {
    const { getMovie } = movieAPI;
    const { match: { params } } = this.props;
    const { id } = params;
    const movie = await getMovie(id);
    this.setState({
      movie,
      status: 'no-loading',
    });
  }

  render() {
    const { status, redirect, movie } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
