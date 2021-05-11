import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  movieDetails = ({ id, title, subtitle, storyline, imagePath, rating, genre }) => (
    <div data-testid="movie-details">
      <span className="movieId" style={ { display: 'none' } }>{id}</span>
      <img src={ `/${imagePath}` } alt={ title } />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{storyline}</p>
      <p>{genre}</p>
      <span>{rating}</span>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      <Link to="/">VOLTAR</Link>
    </div>
  );

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    // const { title, storyline, imagePath, genre, rating, subtitle } = {};

    return (
      loading ? <Loading /> : this.movieDetails(movie)
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
