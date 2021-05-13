import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.renderMovie = this.renderMovie.bind(this);
    this.delMovies = this.delMovies.bind(this);
    this.state = {
      stateLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.renderMovie();
  }

  delMovies() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  async renderMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { stateLoading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          stateLoading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, stateLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const editLink = `${id}/edit`;
    return (
      stateLoading ? <Loading /> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div>
            <Link to={ editLink }>EDITAR</Link>
            <span>{' '}</span>
            <Link to="/">VOLTAR</Link>
            <span>{' '}</span>
            <Link to="/" onClick={ this.delMovies }>DELETAR</Link>
          </div>
        </div>
      )
    );
  }
}

MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '1',
    }),
  }),
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default MovieDetails;
