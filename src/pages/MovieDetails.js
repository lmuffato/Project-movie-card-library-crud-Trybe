import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.getCurrMovie = this.getCurrMovie.bind(this);
    this.deleteCurrMovie = this.deleteCurrMovie.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getCurrMovie(id);
  }

  componentWillUnmount() {
    return <Redirect to="/" />;
  }

  getCurrMovie(id) {
    this.setState({ loading: true }, async () => {
      const currMovie = await movieAPI.getMovie(id);
      this.setState((previousState) => ({
        movie: { ...previousState.movie, ...currMovie },
        loading: false,
      }));
    });
  }

  async deleteCurrMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { match: { params: { id } } } = this.props;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <p>{`Title: ${title}`}</p>
        { console.log(imagePath) }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteCurrMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
