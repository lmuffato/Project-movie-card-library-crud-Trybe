import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };
    this.getMovieById = this.getMovieById.bind(this);
    this.modifiedRender = this.modifiedRender.bind(this);
    this.deleteMovieLocal = this.deleteMovieLocal.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }

  async getMovieById() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    this.setState({
      loading: true,
    });
    const res = await getMovie(id);
    this.setState({
      movies: res,
      loading: false,
    });
  }

  deleteMovieLocal = () => {
    const { deleteMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    deleteMovie(id);
  }

  modifiedRender = () => {
    const { movies, loading } = this.state;
    const { imagePath, subtitle, storyline, genre, rating, title } = movies;
    const { match } = this.props;
    const { id } = match.params;
    if (loading) return <Loading />;
    return (
      <section>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div id="teste">
          <spam>{ `movieAPI: ${movieAPI}; Loading: ${Loading} ; Title:${title}` }</spam>
        </div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovieLocal }>DELETAR</Link>
      </section>
    );
  }

  render() {
    return (
      <div data-testid="movie-details">
        { this.modifiedRender() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequerid;

export default MovieDetails;
