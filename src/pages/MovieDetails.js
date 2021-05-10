import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { match } = this.props;
    const { params } = match;

    this.state = {
      movie: {},
      loading: false,
      id: params.id,
    };
  }

  handleChange = async () => {
    this.setState({ loading: true },
      async () => {
        const { id } = this.state;
        const getMovie = await movieAPI.getMovie(id);
        console.log(getMovie);
        this.setState({
          movie: getMovie,
          loading: false,
        });
      });
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const { params } = match;
    console.log(`${params} params`);
    this.handleChange();
  }

  render() {
    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading loading="Carregando..." />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
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
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
