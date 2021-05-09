import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class movieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: [],
      meuid: null,
    };
  }

  componentDidMount() {
    this.mudaEstado();
  }

  mudaEstado = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState(() => ({
      movie: response,
      loading: false,
      meuid: id,
    }));
  }

  movieDetails = () => {
    const { movie, meuid } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${meuid}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>);
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading === true ? <Loading loadingTxt="Carregando..." /> : this.movieDetails()}
      </div>
    );
  }
}

movieDetails.propTypes = {
  title: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  subtitle: PropTypes.string,
}.isRequired;

export default movieDetails;
