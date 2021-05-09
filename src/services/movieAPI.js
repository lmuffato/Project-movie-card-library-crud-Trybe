import data from './movieData';

// moveAPI simula uma API importando os arquivos que encontram-se no movieData

localStorage.setItem('movies', JSON.stringify(data)); // transformando data em JSON

// os valores que estão no localStorage e retorna em objeto:
const readMovies = () => JSON.parse(localStorage.getItem('movies'));
// usa a variável 'movies' para salvar na chave 'movies':
const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

const TIMEOUT = 2000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------

// simulateRequest espera o TIMEOUT antes de retornar os movies
const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

// essa promise vai 'resolver' os movies, portanto getMovieS retorna todos os filmes
export const getMovies = () => (
  new Promise((resolve) => {
    const movies = readMovies();
    simulateRequest(movies)(resolve);
  })
);

// getMoviE procura todos os filmes utilizando o find para buscar o movieId
// resolvendo com o movie que ela localizou
export const getMovie = (movieId) => {
  // utiliza a função readMovies para retornar todos os filmes como um objeto?
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));
  return new Promise((resolve) => {
    simulateRequest(movie)(resolve);
  });
};

// updateMovie - carrega todos os filmes, utilizando o map, para verificar
// se o movie do parâmetro é o mesmo movie.id, ou seja, se updateMovie
// tem o mesmo id de movie.id
// se forem iguais: selecina o ...movie e faz merge com ...updateMovie
// se não: retorna apenas o filme
// e atualiza no storage? Não ficou muito claro.
export const updateMovie = (updatedMovie) => (
  new Promise((resolve) => {
    const movies = readMovies().map((movie) => {
      if (movie.id === parseInt(updatedMovie.id, 10)) {
        return { ...movie, ...updatedMovie };
      }
      return movie;
    });
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

// semelhante a updateMovie
// mas aqui cria/adiciona um novo movie
export const createMovie = (movieData) => (
  new Promise((resolve) => {
    let movies = readMovies();
    const nextId = movies[movies.length - 1].id + 1;
    const newMovie = { ...movieData, id: nextId };
    // atribui um novo array em movies que está sendo adicionado no newMovie
    movies = [...movies, newMovie];
    saveMovies(movies);
    simulateRequest(SUCCESS_STATUS)(resolve);
  })
);

// deleteMovie faz um filter e retira o filme que tiver o id
export const deleteMovie = (movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    simulateRequest({ status: SUCCESS_STATUS })(resolve);
  });
};
