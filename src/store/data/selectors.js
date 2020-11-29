import {NameSpace} from '../root-reducer';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getFullFilms = (state) => {
  return state[NAME_SPACE].startFilms;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getComments = (state, id) => {
  const comments = state[NAME_SPACE].comments;
  return comments[id];
};

export const getGenres = (state) => {
  return state[NAME_SPACE].films.map((it) => it.genre);
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};
