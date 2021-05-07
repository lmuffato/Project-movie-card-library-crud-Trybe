import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fecthMovies();
  }

 fecthMovies = () => {
   this.setState({
     loading: true,
   }, async () => {
     const fecthMovies = await movieAPI.getMovies();
     this.setState((paststate) => ({
       movies: [...paststate.movies, ...fecthMovies],
       loading: false,
     }));
   });
 }

 conditional = () => {
   const { loading, movies } = this.state;
   if (loading) return <Loading />;
   return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
 }

 render() {
   return (
     <div data-testid="movie-list">
       {this.conditional()}
     </div>
   );
 }
}

export default MovieList;
