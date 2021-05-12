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
      loading: true,
      movieID: null,
    };
    this.showMovieDetails = this.showMovieDetails.bind(this);
  }

  componentDidMount() {
    this.showMovieDetails();
  }

  showMovieDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const specificMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: specificMovie,
      loading: false,
      movieID: id,
    });
  }

  render() {
    const { movie, loading, movieID } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return loading ? <Loading /> : (
      <section>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div>
          <Link to={ `/movies/${movieID}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </section>
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
