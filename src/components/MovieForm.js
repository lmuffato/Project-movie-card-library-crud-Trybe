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
      <div className="input-group">
        <label className="form-label" htmlFor="movie_title">
          <h6>Título</h6>
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
      <div className="input-group">
        <label htmlFor="movie_subtitle">
          <h6>Subtítulo</h6>
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
      <div className="row input-group">
        <label htmlFor="movie_image" id="label-src">
          <h6>Imagem</h6>
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
      <div className="input-group">
        <label htmlFor="movie_storyline">
          <h6>Sinopse</h6>
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
      <div className="input-group">
        <label htmlFor="movie_genre" className="form-label">
          <h6>Gênero</h6>
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
            className="form-select form-select-default mb-4"
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
      <div>
        <label htmlFor="movie_rating">
          <h6>Avaliação</h6>
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
            className=""
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
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <form className="row g-3">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
        {this.renderStorylineInput()}
        {this.renderGenreSelection()}
        {this.renderRatingInput()}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.string,
  onSubmit: PropTypes.func,
};

MovieForm.defaultProps = {
  movie: '',
  onSubmit: null,
};

export default MovieForm;
