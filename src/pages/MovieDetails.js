import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

// referencias Giovanni Maldonado, Renzo Sevilha

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async removeMovie(id) {
    const request = await movieAPI.deleteMovie(id);
    return (request.status === 'OK') && this.setState({ shouldRedirect: true });
  }

  async fetchApi() {
    const { match } = this.props;
    const { id } = match.params;

    const movies = await movieAPI.getMovie(id);
    this.setState({
      movies,
      loading: false,
    });
  }

  structureDetails({ title, storyline, imagePath, genre, rating, subtitle }) {
    const { match } = this.props;
    const { id } = match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.removeMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movies, loading, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" component={ MovieList } />;
    }

    return (
      <div>
        { (loading) ? <Loading /> : this.structureDetails(movies) }
      </div>
    );
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
