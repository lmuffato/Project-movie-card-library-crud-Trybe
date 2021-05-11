import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="movie_title" className="MovieForm__label">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate MovieForm__input--text"
            value={ title || '' }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
          Título
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle" className="MovieForm__label">
          <input
            className="MovieForm__input--text"
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle || '' }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
          Subtítulo
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image" className="MovieForm__label">
          <input
            className="MovieForm__input--text"
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath || '' }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
          Imagem
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline" className="MovieForm__label">
          <textarea
            id="movie_storyline"
            value={ storyline || '' }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
            placeholder="Insira a sinopse do filme"
            rows="10"
          />
          Sinopse
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre" className="MovieForm__label">
          <select
            className="MovieForm__select"
            id="movie_genre"
            value={ genre || '' }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
          Gênero
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating" className="MovieForm__label">
          <input
            className="MovieForm__input--number"
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating || 0 }
            onChange={ (event) => this.updateMovie('rating', +event.target.value) }
          />
          Avaliação
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
          className="movieForm__button"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="movieForme">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

export default MovieForm;

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
  }),
};

MovieForm.defaultProps = {
  movie: {},
};
