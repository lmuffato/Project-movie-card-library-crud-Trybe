import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-card">
        Movie card
      </div>
    );
  }
}

export default MovieCard;
