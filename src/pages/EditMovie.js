import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.showMovieForEdit = this.showMovieForEdit.bind(this);
  }

  componentDidMount() {
    this.showMovieForEdit();
  }

  handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  showMovieForEdit = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: 'loading', shouldRedirect: false }, () => {
      movieAPI.getMovie(id).then((specificMovie) => {
        this.setState({ movie: specificMovie, status: '', shouldRedirect: false });
      });
    });
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
      <div className="editPage" data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default EditMovie;
