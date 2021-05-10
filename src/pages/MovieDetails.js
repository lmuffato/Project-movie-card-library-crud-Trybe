import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Delet from './deletMovie';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.FecthMovie();
  }

  FecthMovie = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      loading: true,
    }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState((paststate) => ({
        movie: {
          ...paststate.movie,
          ...movie,
        },
        loading: false,
      }));
    });
  }

  conditional = () => {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) return <Loading />;
    return (
      <div>
        <h1>{title}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <BrowserRouter>
          <Route path="/" render={ () => <Delet id={ id } /> } />
        </BrowserRouter>
        <Link to="/">DELETAR</Link>
      </div>
    );
  }

  render() {
    return (
      <div data-testid="movie-details">
        {this.conditional()}
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
