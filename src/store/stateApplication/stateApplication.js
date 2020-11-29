import {extend} from '../../utils';
import {ActionType} from '../action';
import {userServeToApplicationAdapter} from "../../services/userAdapter";
import {AuthorizationStatus} from "../../const/const";


const initialState = {
  authorization: AuthorizationStatus.NO_AUTH,
  userData: {},
  error: undefined,
};

const stateApplication = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorization: action.payload,
      });

    case ActionType.SET_USER_DATA:
      const userDataCorrect = userServeToApplicationAdapter(action.payload);

      return extend(state, {
        userData: userDataCorrect,
      });

    case ActionType.LOG_ERROR:
      return extend(state, {
        error: action.payload,
      });
  }

  return state;
};

export {stateApplication};
