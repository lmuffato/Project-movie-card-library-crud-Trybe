import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: true,
      movieId: '',
    };
  }

  componentDidMount() {
    console.log('component');
    const { match: { params: { id } } } = this.props;
    this.apiMovie(id);
  }

  deleteMovie = () => {
    const { match: { params: id } } = this.props;
    return movieAPI.deleteMovie(id.id);
  }

  async apiMovie(id) {
    const selectedMovie = await movieAPI.getMovie(id);
    this.setState({
      isLoaded: false,
      movieId: selectedMovie,
    });
    console.log('function', movieAPI.getMovie(id));
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movieId, isLoaded } = this.state;
    // this.DidUpdate(id);
    console.log('render', id);
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (isLoaded) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = movieId;

    return (
      <div className="movie-details-body">
        <div className="movie-details" data-testid="movie-details">
          <img
            className="movie-details-img"
            alt="Movie Cover"
            src={ `../${imagePath}` }
          />
          <div className="movie-card-body">
            <p className="movie-details-title">{ `Title: ${title}` }</p>
            <p className="movie-details-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-details-storyline">{ `Storyline: ${storyline}` }</p>
            <p className="movie-details-genre">{ `Genre: ${genre}` }</p>
          </div>
          <p className="details-rating">{ `Rating: ${rating}` }</p>
          <div className="movie-details-rating">
            <Link
              to={ {
                pathname: `/movies/${id}/edit`,
                state: { id },
              } }
            >
              EDITAR
            </Link>
            <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
            <Link to="/">VOLTAR </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
