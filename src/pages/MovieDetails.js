import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
  constructor() {
    super()
    this.ComeToMeMovies = this.ComeToMeMovies.bind(this)
    this.DeleteMovie = this.DeleteMovie.bind(this)
    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.ComeToMeMovies()
  }

  async ComeToMeMovies() {
    const allMovies  = await movieAPI.getMovies()
      this.setState({
        movies: allMovies,
        loading: false,
      })
  }

  DeleteMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id)
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (this.state.loading){
    return <Loading />
    }
    const { id } = this.props.match.params;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movies[id-1];

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Title: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.DeleteMovie}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
