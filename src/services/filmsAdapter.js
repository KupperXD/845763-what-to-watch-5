import {extend} from "../utils";

const filmAdapter = (film) => {
  const newFilm = extend({}, film);
  const interimFilm = {
    id: newFilm.id,
    name: newFilm.name,
    description: newFilm.description,
    rating: newFilm.rating,
    director: newFilm.director,
    starring: newFilm.starring,
    genre: newFilm.genre,
    released: newFilm.released,
    posterImage: newFilm[`poster_image`],
    previewImage: newFilm[`preview_image`],
    backgroundImage: newFilm[`background_image`],
    backgroundColor: newFilm[`background_color`],
    videoLink: newFilm[`video_link`],
    previewVideoLink: newFilm[`preview_video_link`],
    scoresCount: newFilm[`scores_count`],
    runTime: newFilm[`run_time`],
    isFavorite: newFilm[`is_favorite`],
  };

  return interimFilm;
};

export const filmsServeToApplicationAdapter = (films, isUpdateFilm = false) => {
  let newFilms;

  if (isUpdateFilm) {
    return filmAdapter(films);
  }

  newFilms = [...films];

  newFilms = newFilms.map((film) => {
    return filmAdapter(film);
  });

  return newFilms;
};
