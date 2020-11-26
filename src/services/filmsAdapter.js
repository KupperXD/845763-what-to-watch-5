import {extend} from "../utils";

export const filmsServeToApplicationAdapter = (films) => {
  let newFilms = [...films];

  newFilms = newFilms.map((film) => {
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
  });

  return newFilms;
};
