export const filtredFilms = (genre, films) => {
  return films.filter((film) => {
    return film.genre === genre;
  });
};
