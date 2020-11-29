import MockAdapter from 'axios-mock-adapter';
import {createApi} from "../../services/api";
import {ActionCreator, ActionType} from "../action";
import {fetchFilms} from "../api-action";

describe(`Reducer works correctly`, () => {
  it(`Returns the correct genre`, () => {
    expect(ActionCreator.changeFilter(`Crime`)).toEqual(
        {
          type: ActionType.CHANGE_FILTER,
          payload: `Crime`,
        }
    );
  });

  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
