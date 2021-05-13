import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const { match: { params: { id } } } = this.props;
    const getMovi = await movieAPI.getMovie(id);
    this.setState({ movie: getMovi, loading: false });
  }

  removeMovie() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie: {
      title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { loading } = this.state;
    const { location: { pathname } } = this.props;
    return (
      loading ? <Loading /> : (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <section>
            <Link to={ `${pathname}/edit` }> EDITAR </Link>
            <Link to="/"> VOLTAR </Link>
            <Link to="/" onClick={ this.removeMovie }> DELETAR </Link>
          </section>
        </div>
      )
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default MovieDetails;
