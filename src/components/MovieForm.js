import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

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

  updateMovie = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="movie_title">
            Título
            <Form.Control
              placeholder="Insira o título"
              id="movie_title"
              name="title"
              type="text"
              className="validate"
              value={ title }
              onChange={ this.updateMovie }
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="movie_subtitle">
            Subtítulo
            <Form.Control
              placeholder="Insira o subtítulo"
              id="movie_subtitle"
              name="subtitle"
              type="text"
              value={ subtitle }
              onChange={ this.updateMovie }
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <Form.Group>
          <Form.Label htmlFor="movie_image">
            Imagem
            <Form.Control
              placeholder="Insira o caminho da imagem"
              id="movie_image"
              name="imagePath"
              type="text"
              value={ imagePath }
              onChange={ this.updateMovie }
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="movie_storyline">
            Sinopse
            <Form.Control
              as="textarea"
              rows={ 3 }
              id="movie_storyline"
              name="storyline"
              value={ storyline }
              onChange={ this.updateMovie }
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="movie_genre">
            Gênero
            <Form.Control
              as="select"
              id="movie_genre"
              name="genre"
              defaultValue={ genre }
              onChange={ this.updateMovie }
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
              <option value="fantasy">Fantasia</option>
            </Form.Control>
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="movie_rating">
            Avaliação
            <Form.Control
              placeholder="Dê a avaliação do filme"
              id="movie_rating"
              name="rating"
              type="number"
              step={ 0.1 }
              min={ 0 }
              max={ 5 }
              value={ rating }
              onChange={ this.updateMovie }
            />
          </Form.Label>
        </Form.Group>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <Button
          variant="primary"
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="edit-form-container">
        <Form className="edit-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </Form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
