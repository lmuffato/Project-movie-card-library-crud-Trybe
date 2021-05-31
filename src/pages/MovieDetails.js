import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // trecho do código embasado na solução de Eduardo Costa
  async handleDeleteMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({
      loading: true,
    });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieFound = await movieAPI.getMovie(id);
    this.setState({
      movie: movieFound,
      loading: true,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { match: { params: { id } } } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {/* Trecho do código inspirado na solução encontrado por Eduardo Costa */}
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.handleDeleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.object,
}.isRequired;

export default MovieDetails;
