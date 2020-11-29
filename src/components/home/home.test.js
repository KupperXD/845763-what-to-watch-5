import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films";
import user from "../../mocks/user";

import {Home} from "./home";

const noop = () => {};

describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let homeComponent = null;

  beforeEach(() => {
    store = mockStore({
      DATA: {
        films,
        startFilms: films,
        promoFilm: films[0],
        genre: `all`,
      },
      USER: {
        userData: user,
      },
    });
    store.dispatch = jest.fn();

    homeComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Home films={films}
              addFavoriteAction={noop}
              removeFavoriteAction={noop}
              promoFilm={films[0]}
              user={user}
            />
          </BrowserRouter>
        </Provider>
    );
  });

  it(`renders correctly`, () => {
    expect(homeComponent.toJSON()).toMatchSnapshot();
  });
});
