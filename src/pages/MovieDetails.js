import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getMovies, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.filterMovies = this.filterMovies.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);
    this.state = {
      loading: true,
      movie: '',
    };
  }

  async componentDidMount() {
    const requestMovies = await getMovies()
      .then((response) => this.filterMovies(response));
    return requestMovies;
  }

  async deleteElement(id) {
    const deletar = await deleteMovie(id);
    return deletar;
  }

  filterMovies(arrayMovies) {
    const { match: { params: { id } } } = this.props;
    const [choosenMovie] = arrayMovies.filter((item) => Number(id) === item.id);
    this.setState({ movie: choosenMovie, loading: false });
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ title }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <article>
        { loading && <Loading /> }
        { !loading && this.renderMovieDetails() }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteElement(id) }>DELETAR</Link>
      </article>
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
