import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section data-testid="movie-card">
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <img src={ imagePath } alt={ `Imagem do filme ${ title }` } />
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </section>
    );
  }
}

export default MovieCard;
