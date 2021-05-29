import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovieDetails = this.fetchMoviesDetails.bind(this);
    this.state = {
      load: true,
      movies: {},
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMoviesDetails() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      load: true,
    });
    const respoMovies = await movieAPI.getMovie(id);
    this.setState({
      movies: respoMovies,
      load: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies, load } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    if (load) {
      return <Loading />;
    }
    return (
      <section data-testid="movie-details">
        <h2>{ `title: ${title}` }</h2>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/"> VOLTAR </Link>
          <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
          <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
        </div>
      </section>
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
