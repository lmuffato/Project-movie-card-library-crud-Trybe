import React, { Component } from 'react';
import { shape, number } from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie:
    {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    }, loading } = this.state;

    return loading ? <Loading />
      : (<div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
         </div>);
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
