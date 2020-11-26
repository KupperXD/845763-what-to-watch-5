import {extend} from '../../utils';
import {ActionType} from '../action';
import {filtredFilms} from "../../filtred";
import {ALL_GENRE} from "../../const/const";
import {filmsServeToApplicationAdapter} from "../../services/filmsAdapter";


const initialState = {
  genre: `All genres`,
  startFilms: [],
  films: [],
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
  }

  return state;
};


export {data};
