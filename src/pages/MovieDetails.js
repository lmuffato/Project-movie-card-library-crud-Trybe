import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
// import { prototype } from 'enzyme-adapter-react-16';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ isLoading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ isLoading: false, movie });
    });
  };

  callDelete = async () => {
    const { deleteMovie } = movieAPI;
    const { movie: { id } } = this.state;
    await deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      isLoading,
      shouldRedirect,
      movie: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    const classImg = 'movie-card-image';
    const { match: { params: { id } } } = this.props;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      isLoading
        ? <Loading />
        : (
          <section className="movie-card" data-testid="movie-details">
            <img className={ classImg } alt="Movie Cover" src={ `../${imagePath}` } />
            <p className="movie-card-title">{ title }</p>
            <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-card-subtitle">{ `Storyline: ${storyline}` }</p>
            <p className="movie-card-subtitle">{ `Genre: ${genre}` }</p>
            <p className="movie-card-subtitle">{ `Rating: ${rating}` }</p>
            <section className="movie-card-rating">
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={ this.callDelete }>DELETAR</Link>
            </section>
          </section>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
