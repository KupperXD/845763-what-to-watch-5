import {combineReducers} from "redux";
import {stateApplication} from "./stateApplication/stateApplication";
import {data} from "./data/data";

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: stateApplication,
});

