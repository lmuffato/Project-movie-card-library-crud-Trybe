import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';

import { getMovies } from '../services/movieAPI';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.disableLoading = this.disableLoading.bind(this);
    this.state = { ...props.movie, loading: true };
  }

  async componentDidMount() {
    const { idMovie } = this.props;
    if (idMovie === '') {
      return this.disableLoading();
    }
    const requestMovies = await getMovies()
      .then((response) => this.filterMovies(response));
    return requestMovies;
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  disableLoading() {
    this.setState({ loading: false });
  }

  filterMovies(arrayMovies) {
    const { idMovie } = this.props;
    if (idMovie) {
      const [choosenMovie] = arrayMovies.filter((movie) => movie.id === Number(idMovie));
      this.setState({
        id: choosenMovie.id,
        title: choosenMovie.title,
        subtitle: choosenMovie.subtitle,
        imagePath: choosenMovie.imagePath,
        storyline: choosenMovie.storyline,
        genre: choosenMovie.genre,
        rating: choosenMovie.rating,
        loading: false,
      });
    }
    this.setState({ loading: false });
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
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
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
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
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
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
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ storyline }
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
      <div>
        <label htmlFor="movie_genre">
          Gênero
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
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
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
          onClick={ () => this.handleSubmit(this.state) }
        >
          Submit
        </button>
      </div>
    );
  }

  renderAll() {
    return (
      <form>
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

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading && <Loading />}
        { !loading && this.renderAll() }
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  onSubmit: PropTypes.func,
  idMovie: PropTypes.string,
};

MovieForm.defaultProps = {
  match: undefined,
  movie: {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    genre: '',
    rating: 0,
    idMovie: '',
  },
  onSubmit: (() => {}),
  idMovie: '',
};

export default MovieForm;
