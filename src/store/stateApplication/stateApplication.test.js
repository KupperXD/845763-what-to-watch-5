import MockAdapter from 'axios-mock-adapter';
import {createApi} from "../../services/api";
import {ActionCreator, ActionType} from "../action";
import {login} from "../api-action";

const email = `2222@mail.ru`;
const password = `1233123`;

describe(`Reducer works correctly`, () => {
  it(`Should return error`, () => {
    expect(ActionCreator.logError(`Error`)).toEqual(
        {
          type: ActionType.LOG_ERROR,
          payload: `Error`,
        }
    );
  });

  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const _getState = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const logIn = login({email, password});

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return logIn(dispatch, _getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: [{fake: true}]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: `AUTH`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/`
        });
      });
  });
});
