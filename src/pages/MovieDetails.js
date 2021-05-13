import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.movieFetch.bind(this);
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

  render() {
    // Change the condition to check the state
    const { loading, movie, initial } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const load = <Loading />;

    // if (true) return <Loading />;
    if (loading) {
      return load;
    }

    if (initial) {
      return <Link to="/" />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
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
