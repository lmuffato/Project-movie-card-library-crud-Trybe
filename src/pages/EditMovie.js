import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    return movieAPI.getMovie(id)
      .then((response) => this
        .setState(() => ({
          movie: response,
          status: '',
        })));
  }

  atualizaCard = (filmeEditado) => {
    this.setState(() => ({
      status: 'loading',
      shouldRedirect: true,
    }));
    return movieAPI.updateMovie(filmeEditado);
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
        <MovieForm movie={ movie } onSubmit={ this.atualizaCard } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
