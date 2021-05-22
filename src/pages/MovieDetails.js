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
      id: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie = async () => {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
      id,
    });
  }

  render() {
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
      loading, id } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <h3>{ `Title: ${title}` }</h3>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
            </div>
          )}
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
