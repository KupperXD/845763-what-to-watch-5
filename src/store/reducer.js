import {extend} from '../utils';
import {ActionType} from './action';
import films from "../mocks/films";
import {filtredFilms} from "../filtred";
import {ALL_GENRE} from "../const/const";


const initialState = {
  genre: `All genres`,
  startFilms: films,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILTRED_FILMS:
      let currentFilms = filtredFilms(state.genre, initialState.films);

      if (state.genre === ALL_GENRE) {
        return extend(state, {
          films: initialState.films
        });
      }

      return extend(state, {
        films: currentFilms,
      });
  }

  return state;
};


export {reducer};
