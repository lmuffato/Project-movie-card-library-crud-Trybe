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
  }

  componentDidMount() {
    this.movieFetch();
  }

  handleClick = () => {
    this.setState({
      initial: true,
    });
  }

  async movieFetch() {
    const { match } = this.props;
    const { params } = match;
    const response = await movieAPI.getMovie(params.id);
    this.setState({ movie: response, loading: false, initial: false });
  }

  async removeTitle() {
    const { match } = this.props;
    const { params } = match;
    const data = await movieAPI.deleteMovie(params.id);
    return console.log(data);
  }

  render() {
    // Change the condition to check the state
    const { loading, movie, initial } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    // if (true) return <Loading />;
    if (loading) {
      return <Loading />;
    }

    if (initial) {
      return <Link to="/" />;
    }

    return (
      <div data-testid="movie-details" className="movieDetails">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Title: ${title}`}</h1>
        <h2>{ `Subtitle: ${subtitle}` }</h2>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="navBtn">
          <button type="button">
            <Link to={ `/movies/${id}/edit` }>
              EDITAR
            </Link>
          </button>
          <button type="button">
            <Link to="/">
              VOLTAR
            </Link>
          </button>
          <button type="button" onClick={ () => this.removeTitle() }>
            <Link to="/">
              DELETAR
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
