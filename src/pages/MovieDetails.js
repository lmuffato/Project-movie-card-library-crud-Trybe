import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import DetailedMovie from '../components/DetailedMovie';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const resume = () => (
      <DetailedMovie
        title={ title }
        subtitle={ subtitle }
        imagePath={ imagePath }
        genre={ genre }
        rating={ rating }
        storyline={ storyline }
      />
    );

    return (
      <div data-testid="movie-details">
        { movie === '' ? <Loading /> : resume() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
