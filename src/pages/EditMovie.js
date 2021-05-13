// Desenvolvimento do raciocinio em conjunto com Guilherme Dornelles Turma 10-A. Assistimos o vídeo de resolução na turma 8 no link https://files.slack.com/files-pri/TMDDFEPFU-F01LNLQMWTS/zoom_0.mp4
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

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
    this.fetchMovieData();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
  }

  async fetchMovieData() {
    this.setState({ loading: true }, async () => {
      const { id } = this.state;
      const response = await movieAPI.getMovie(id);
      this.setState({ movie: response, loading: false });
    });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  genre: propTypes.string,
  rating: propTypes.number,
}.isRequired;
export default EditMovie;
