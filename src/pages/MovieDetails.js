import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false
    }
  }

  fetchApi = () => {
    const { id } = this.props.match.params;
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({
          movie,
          loading: false,
        })
      });
  }

  componentDidMount = () => {
    this.fetchApi();
  }
  
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id } = this.props.match.params;
    const { loading } = this.state;
    const { movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
