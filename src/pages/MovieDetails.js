import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: false,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  requestMovie = async () => {
    const { getMovie } = movieAPI;
    const { match: { params: { id } } } = this.props;
    const theMovie = await getMovie(id);
    this.setState({
      movie: theMovie,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    let what2Return = '';
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (movie) {
      what2Return = (
        <div>
          <h2>{ title }</h2>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>);
    } else {
      what2Return = <Loading />;
    }
    return (
      <div data-testid="movie-details">
        { what2Return }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }> EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
