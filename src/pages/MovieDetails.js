import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleLoading = this.handleLoading.bind(this);
  }

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies = async () => {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id).then((data) => {
        this.setState({ movie: data, loading: false });
      });
    });
  };

  handleLoading(movie) {
    const { imagePath, subtitle, storyline, genre, rating } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;

    return loading ? <Loading /> : this.handleLoading(movie);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
