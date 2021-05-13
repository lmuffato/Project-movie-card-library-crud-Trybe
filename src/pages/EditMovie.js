import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.renderMovies();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  renderMovies() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { status: 'loading' },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          status: 'loaded',
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    let pageEdit;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
      pageEdit = <Loading />;
    } else {
      pageEdit = <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
    }

    return (
      <div data-testid="edit-movie">
        {pageEdit}
      </div>
    );
  }
}

EditMovie.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '1',
    }),
  }),
};

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default EditMovie;
