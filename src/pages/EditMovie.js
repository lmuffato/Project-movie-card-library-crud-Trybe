import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleMovieEdit();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  handleMovieEdit = async () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id).then((data) => {
        this.setState({ movie: data, loading: false, shouldRedirect: false });
      });
    });
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
