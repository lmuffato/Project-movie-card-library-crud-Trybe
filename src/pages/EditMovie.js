import React, { Component } from 'react';
import { number } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ shouldRedirect: true });
    });
  }

  // função feita com a ajuda do Luan Ramalho
  fetchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      status: 'updated',
      movie,
    });
  }

  componentDidMount = async () => {
    this.fetchMovie();
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
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
  id: number,
}.isRequired;

export default EditMovie;
