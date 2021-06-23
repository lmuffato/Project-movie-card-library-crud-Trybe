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
    const { match: { params: { id } } } = this.props;
    deleteMovie(id);
  }

  modifiedRender = () => {
    const { movies, loading } = this.state;
    const { imagePath, subtitle, storyline, genre, rating, title } = movies;
    // console.log(imagePath);
    const { match: { params: { id } } } = this.props;
    if (loading) return <Loading />;
    return (
      <section className="card mb-3" maxwidth="500px">
        <img
          src={ imagePath }
          alt={ `Capa do filme ${title}` }
          // width="80%"
          height="500px"
          className="card-img-top"
        />
        <figcaption
          className="figure-caption text-end"
        >
          { `Capa do filme ${title}` }
        </figcaption>
        <div>
          <h5 className="card-title">{ `Title: ${title}`}</h5>
          <h5 className="card-title d-inline">
            Subtitle:
          </h5>
          <p className="card-text d-inline">
            {' '}
            { subtitle }
          </p>
          <br />
          <h5 className="card-title d-inline">Storyline:</h5>
          <p className="card-text d-inline">
            {' '}
            { storyline}
          </p>
          <br />
          <h5 className="card-title d-inline">Genre:</h5>
          <p className="card-text d-inline">
            {' '}
            {genre}
          </p>
          <br />
          <h5 className="card-title d-inline">Rating:</h5>
          <p className="card-text d-inline">
            { ' ' }
            {rating}
          </p>
          <br />
          <Link to={ `/movies/${id}/edit` } className="btn btn-outline-secondary">
            EDITAR
          </Link>
          <Link to="/" className="btn btn-outline-secondary">
            VOLTAR
          </Link>
          <Link to="/" onClick={ this.deleteMovieLocal } className="btn btn-danger">
            DELETAR
          </Link>
        </div>
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
