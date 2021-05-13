import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

// Requisito feito com ajuda de https://trybecourse.slack.com/files/U01AYN59Y2J/F01LNLQMWTS/zoom_0.mp4 e Lucas Lara Turma 10 - A.
class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
  }

  getData() {
    const { id } = this.state;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  id: propTypes.number,
}.isRequerided;

export default EditMovie;
