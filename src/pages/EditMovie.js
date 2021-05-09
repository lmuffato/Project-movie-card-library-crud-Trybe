import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoaded: false,
      isUpdated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit = async (updatedMovie) => {
    const { updateMovie } = movieAPI;
    const movie = await updateMovie(updatedMovie);

    this.setState(({ isUpdated }) => ({
      isUpdated: !isUpdated,
      movie,
    }));
  }

  fetchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    try {
      const movie = await getMovie(id);
      this.setState({
        movie,
        isLoaded: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { isLoaded, movie, isUpdated } = this.state;
    if (isUpdated) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {!isLoaded
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
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
