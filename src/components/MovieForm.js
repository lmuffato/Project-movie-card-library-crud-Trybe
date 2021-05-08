import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <div className="col-md-6">
        <label htmlFor="movie_title" className="form-label">
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
      <div className="col-md-6">
        <label htmlFor="movie_subtitle" className="form-label">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            className="form-control"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="col-md-6">
        <label htmlFor="movie_image" className="form-label">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            className="form-control"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="col-md-12">
        <label htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            className="form-control"
            value={ storyline }
            rows="5"
            cols="500"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="col-md-6">
        <label htmlFor="movie_genre" className="form-label">
          Gênero
          <select
            id="movie_genre"
            className="form-select"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
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
      <div className="col-md-12">
        <label htmlFor="movie_rating" className="form-label">
          Avaliação
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            className="form-control"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="mt-3 w-auto">
        <button
          type="button"
          className="btn btn-primary"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  renderReturnButton() {
    return (
      <div className="mt-3 w-auto">
        <Link
          to="/"
          className="btn btn-danger"
        >
          Cancelar
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="py-3 flex-md-row">
        <form className="row">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderStorylineInput()}
          {this.renderImagePathInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
          {this.renderReturnButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
