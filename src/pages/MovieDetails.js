import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      id,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.state;
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: requestMovie,
          loading: false,
        });
      },
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading />;
    }

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h4>{ `Title: ${title}` }</h4>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
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
