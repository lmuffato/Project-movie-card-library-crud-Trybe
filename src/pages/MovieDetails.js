import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { id } = props.match.params;

    this.state = {
      movie: '',
      movieId: id,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { getMovie } = movieAPI;
    const { movieId } = this.state;
    const requestReturn = await getMovie(movieId);
    this.setState({ movie: requestReturn });
  }

  delMovie = () => {
    const { movieId } = this.state;
    const { deleteMovie } = movieAPI;
    deleteMovie(movieId);
  }

  render() {
    const { movie, movieId } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {movie ? (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h4>{ title }</h4>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${movieId}/edit` }>EDITAR</Link>
            <Link onClick={ this.delMovie } to="/">DELETAR</Link>
          </div>)
          : <Loading />}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
