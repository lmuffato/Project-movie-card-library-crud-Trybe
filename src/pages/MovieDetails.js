import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    this.state = {
      movie: {},
      loading: true,
      id: params.id,
    };
  }

  componentDidMount = async () => {
    const { id } = this.state;
    this.handleDetaisl(id);
  }

  handleDetaisl = async (id) => {
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovie,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <>
        <div className="movie-card" data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p className="movie-card-title ">{`Title: ${title}`}</p>
          <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p className="rating">{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
  }).isRequired,
};

export default withRouter(MovieDetails);
