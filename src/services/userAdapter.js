import {extend} from "../utils";

export const userServeToApplicationAdapter = (user) => {
  const newUserData = extend({}, user);

  newUserData.avatarUrl = newUserData[`avatar_url`];

  delete newUserData[`avatar_url`];

  return newUserData;
};
