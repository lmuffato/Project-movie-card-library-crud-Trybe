import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../bulma.min.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.FecthMovie();
  }

  callDelet = (id) => {
    movieAPI.deleteMovie(id);
  }

  FecthMovie = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      loading: true,
    }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState((paststate) => ({
        movie: {
          ...paststate.movie,
          ...movie,
        },
        loading: false,
      }));
    });
  }

  conditional = () => {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) return <Loading />;
    return (
      <div>
        <div className="box">
          <h1 className="title">{title}</h1>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="level-item has-text-centered">
          <Link className="button is-dark" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link className="button is-dark" to="/">VOLTAR</Link>
          <Link
            className="button is-dark"
            to="/"
            onClick={ () => this.callDelet(id) }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div data-testid="movie-details">
        {this.conditional()}
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
