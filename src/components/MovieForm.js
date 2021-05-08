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
        <label htmlFor="movie_title" className="text-input-label">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate text-input-input"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle" className="text-input-label">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
            className="text-input-input"
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image" className="text-input-label">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
            className="text-input-input"
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline" className="textarea-input-label">
          Sinopse
          <br />
          <textarea
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
            className="textarea-input-input"
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre" className="text-input-label">
          Gênero
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
            className="text-input-input"
          >
            <option value="action" className="text-input-input">Ação</option>
            <option value="comedy" className="text-input-input">Comédia</option>
            <option value="thriller" className="text-input-input">Suspense</option>
            <option value="fantasy" className="text-input-input">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating" className="text-input-label">
          Avaliação
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
            className="text-input-input"
          />
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
          className="button"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form">
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

MovieForm.propTypes = {
  movie: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
