import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      isLoaded: false,
      id: null,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    try {
      const movie = await getMovie(id);
      this.setState({ movie, id, isLoaded: true });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movie, isLoaded, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {!isLoaded ? (
          <Loading />
        ) : (
          <>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }).isRequired,
};

export default MovieDetails;
