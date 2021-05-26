import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async handleSubmit(updatedMovie) {
    const update = await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
    return update;
  }

  getMovies = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, status: 'done' });
  }

  render() {
    const { shouldRedirect, status, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        <h1>Editar Filme</h1>
        {status === 'done' ? <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        /> : <Loading />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
