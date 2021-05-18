import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    getMovie();
    this.setState = ({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    const { eachmovie } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = eachmovie;

    return (

      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link
          to="/"
          onClick={ movieAPI.deleteMovie(movie) }
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  eachmovie: PropTypes.string.isRequired,
};
