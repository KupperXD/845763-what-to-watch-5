import {combineReducers} from "redux";
import {stateApplication} from "./stateApplication/stateApplication";
import {data} from "./data/data";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.STATE]: stateApplication,
});

