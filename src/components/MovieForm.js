import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="input-group-lg row mb-3">
        <label htmlFor="movie_title" className="form-label col-form-label">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate form-control"
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
      <div className="row mb-3">
        <label htmlFor="movie_subtitle" className="form-label">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
            className="form-control"
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="input-group-lg row mb-3">
        <label htmlFor="movie_image" className="form-label">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
            className="form-control"
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="input-group-lg row mb-3">
        <label htmlFor="movie_storyline" className="form-label">
          Sinopse
          <textarea
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
            className="form-control"
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="input-group-lg row mb-3">
        <label htmlFor="movie_genre" className="form-label">
          Gênero
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
            className="form-select"
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div className="input-group-lg row mb-3">
        <label htmlFor="movie_rating" className="form-label">
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
            className="form-control"
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
          className="btn"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form-addMovie">
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
  movie: PropTypes.shape({
    id: PropTypes.string,
    storytelling: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
    rating: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
