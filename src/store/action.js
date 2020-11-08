export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILTRED_FILMS: `GET_FILTRED_FILMS`,
};

export const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filter
  }),
  getFiltredFIlms: () => ({
    type: ActionType.GET_FILTRED_FILMS,
  }),
};
