import {extend} from '../../utils';
import {ActionType} from '../action';
import {AuthorizationStatus} from "../../const/const";


const initialState = {
  authorization: AuthorizationStatus.NO_AUTH,
};

const stateApplication = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorization: action.payload,
      });
  }

  return state;
};


export {stateApplication};
