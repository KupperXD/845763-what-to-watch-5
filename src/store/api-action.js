import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const/const";
import browserHistory from "../browser-history";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));

      return response;
    })
    .then(({data}) => dispatch(ActionCreator.setUserData(data)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => dispatch(ActionCreator.setUserData(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const loadPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`films/promo`)
    .then((response) => {
      const data = response.data;
      dispatch(ActionCreator.loadPromoFilm(data));
    })
);

export const addFavorite = (id) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/1`)
    .then((response) => {
      const data = response.data;

      dispatch(ActionCreator.updateFilm(data));
    })
);

export const removeFavorite = (id) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/0`)
    .then((response) => {
      const data = response.data;

      dispatch(ActionCreator.updateFilm(data));
    })
);

export const loadComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then((response) => {
      const data = response.data;

      dispatch(ActionCreator.loadComments(id, data));
    })
);

export const loadFavorite = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then((response) => {
      const data = response.data;

      dispatch(ActionCreator.loadFavorites(data));
    })
);

export const addComments = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {
    rating: typeof rating === `string` ? parseInt(rating, 10) : rating,
    comment,
  }).then((response) => {
    const data = response.data;

    return dispatch(ActionCreator.loadComments(id, data));
  })
    .then(() => {
      if (browserHistory.length) {
        browserHistory.goBack();
      } else {
        dispatch(ActionCreator.redirectToRoute(`/`));
      }
    })
);
