export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILTRED_FILMS: `GET_FILTRED_FILMS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
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
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};
