import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.request = false;
    this.getMovieToEdit = this.getMovieToEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.request = true;
    this.getMovieToEdit();
  }

  componentWillUnmount() {
    this.request = false;
  }

  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true});
  }

  getMovieToEdit = async () => {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    if (this.request) {
      const movie = await getMovie(id);
      this.setState({
        movie,
        loading: false,
        shouldRedirect: false,
      });
    }
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
  match: PropTypes.object,
}.isRequired;

export default EditMovie;
