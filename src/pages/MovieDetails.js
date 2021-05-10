import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.renderMovies = this.renderMovies.bind(this);
    this.state = {
      stateLoading: true,
      movies: {},
    };
  }

  componentDidMount() {
    this.renderMovies();
  }

  async renderMovies() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { stateLoading: true },
      async () => {
        const requestMovies = await movieAPI.getMovie(id);
        this.setState({
          movies: requestMovies,
          stateLoading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies, stateLoading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      stateLoading ? <Loading /> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      )
    );
  }
}

MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: 1,
    }),
  }),
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default MovieDetails;
