import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      load: true,
    };
  }

  async componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movieId = await movieAPI.getMovie(id);
    this.setState({
      movie: movieId,
      load: false,
    });
  }

  render() {
    // Change the condition to check the state
    const { match: { params: { id } } } = this.props;
    const { movie, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>

      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
