import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = async () => {
    const { match: { params: { id } } } = this.props;
    let { movie } = this.state;
    movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  deleteMovie = () => {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  fetchData = () => {
    const { movie } = this.state;
    if (movie !== ('' || undefined)) {
      const { title, imagePath, subtitle, storyline, genre, rating, id } = movie;
      return (
        <div data-testid="movie-details">
          <Link to="/"> VOLTAR </Link>
          <br />
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>{ storyline }</p>
          <p>{ genre }</p>
          <p>{ rating }</p>
          <button type="button">
            <Link to={ `${id}/edit` }>
              EDITAR
            </Link>
          </button>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      );
    }
  }

  render() {
    const { movie } = this.state;
    return (movie !== '' ? this.fetchData() : <Loading />);
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
