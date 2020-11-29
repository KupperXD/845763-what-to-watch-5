export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILTRED_FILMS: `GET_FILTRED_FILMS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
  SET_USER_DATA: `SET_USER_DATA`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_PROMO_FILMS: `LOAD_PROMO_FILM`,
  UPDATE_FILM: `UPDATE_FILM`,
  LOG_ERROR: `LOG_ERROR`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

export const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filter
  }),
  getFiltredFilms: () => ({
    type: ActionType.GET_FILTRED_FILMS,
  }),
  requireAuthorization: (authStatus) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: authStatus,
  }),
  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILMS,
    payload: film,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  updateFilm: (film) => ({
    type: ActionType.UPDATE_FILM,
    payload: film,
  }),
  logError: (error) => ({
    type: ActionType.LOG_ERROR,
    payload: error,
  }),
  loadComments: (id, comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: {id, comments},
  }),
  loadFavorites: (films) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: films,
  }),
};
