import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.apiMovie();
  }

  async handleSubmit(updatedMovie) {
    const upDateMovie = await movieAPI.updateMovie(updatedMovie);
    console.log(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
    return upDateMovie;
  }

  apiMovie = async () => {
    const { match: { params: id } } = this.props;
    const selMovie = await movieAPI.getMovie(id.id);
    this.setState({
      status: false,
      movie: selMovie,
    });
  }

  deleteMovie = () => {
    const { match: { params: id } } = this.props;
    return movieAPI.deleteMovie(id.id);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status) {
      return <Loading />;
    }

    return (
      <div className="form-style-2" data-testid="edit-movie">
        <h1>Editar Filme</h1>
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        <div className="button-delete">
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOf(
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
      ),
    }),
  }).isRequired,
};

export default EditMovie;
