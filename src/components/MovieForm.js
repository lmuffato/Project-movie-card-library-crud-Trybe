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
      <div>
        <label htmlFor="movie_title" className="label">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate input is-info"
            value={ title }
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
        <label htmlFor="movie_subtitle" className="label">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            className="input is-info"
            value={ subtitle }
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
        <label htmlFor="movie_image" className="label">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="input is-info"
            value={ imagePath }
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
        <label htmlFor="movie_storyline" className="label">
          <textarea
            placeholder="Insira a sinopse"
            id="movie_storyline"
            value={ storyline }
            className="textarea is-info"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
          Sinopse
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="select is-info">
        <label htmlFor="movie_genre" className="label">
          <select
            id="movie_genre"
            value={ genre }
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
        <label htmlFor="movie_rating" className="label">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            className="input is-info"
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
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
          className="button is-success is-medium is-fullwidth"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
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
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
