import {NameSpace} from '../root-reducer';

const NAME_SPACE = NameSpace.USER;

export const getUser = (state) => {
  return state[NAME_SPACE].userData;
};

export const getAuth = (state) => {
  return state[NAME_SPACE].authorization;
};

export const getError = (state) => {
  return state[NAME_SPACE].error;
};
