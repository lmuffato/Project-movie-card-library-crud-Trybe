import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({
        loading: false,
        movie,
      }));
  }

  movieInfo(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div className="container-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1 className="title">{ `Title: ${title}` }</h1>
        <p className="sub">{ `Subtitle: ${subtitle}` }</p>
        <p className="storyline">{ `Storyline: ${storyline}` }</p>
        <p className="genre">{ `Genre: ${genre}` }</p>
        <p className="rating">{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` } className="edit-btn">EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) } className="del-btn">DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;
    return (
      <div data-testid="movie-details">
        {
          loading
            ? <Loading />
            : this.movieInfo(movie)
        }
        <Link to="/" className="back-btn">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
