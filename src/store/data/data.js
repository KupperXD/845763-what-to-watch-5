import {extend} from '../../utils';
import {ActionType} from '../action';
import {filtredFilms} from "../../filtred";
import {ALL_GENRE} from "../../const/const";
import {filmsServeToApplicationAdapter} from "../../services/filmsAdapter";


const initialState = {
  genre: `All genres`,
  startFilms: [],
  films: [],
  favorites: [],
  promoFilm: {},
  comments: {},
};

const updateFilm = (film, films) => films.map((it) => film.id === it.id ? film : it);

const updateFavorite = (film, films) => {
  if (!films.length) {
    return [film];
  }

  return updateFilm(film, films);
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILTRED_FILMS:
      let currentFilms = filtredFilms(state.genre, state.startFilms);

      if (state.genre === ALL_GENRE) {
        return extend(state, {
          films: state.startFilms,
        });
      }

      return extend(state, {
        films: currentFilms,
      });

    case ActionType.LOAD_FILMS:
      const films = filmsServeToApplicationAdapter(action.payload);

      return extend(state, {
        films,
        startFilms: films,
      });

    case ActionType.LOAD_PROMO_FILMS:
      const film = filmsServeToApplicationAdapter(action.payload, true);

      return extend(state, {
        promoFilm: film,
      });

    case ActionType.UPDATE_FILM:
      const filmUpdate = filmsServeToApplicationAdapter(action.payload, true);

      return extend(state, {
        films: updateFilm(filmUpdate, state.films),
        favorites: updateFavorite(filmUpdate, state.favorites),
        promoFilm: state.promoFilm ? updateFilm(filmUpdate, [state.promoFilm])[0] : state.promoFilm,
        startFilms: updateFilm(filmUpdate, state.startFilms),
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: {
          [action.payload.id]: action.payload.comments,
        }
      });

    case ActionType.LOAD_FAVORITES:
      const favoriteFilms = filmsServeToApplicationAdapter(action.payload);

      return extend(state, {
        favorites: favoriteFilms,
      });
  }

  return state;
};


export {data};
