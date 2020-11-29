import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import films from "../../mocks/films";
import user from "../../mocks/user";

import {App} from './app.jsx';


describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let appComponent = null;

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

    appComponent = renderer.create(
        <Provider store={store}>
          <App films={films}/>
        </Provider>
    );
  });

  it(`renders correctly`, () => {
    expect(appComponent.toJSON()).toMatchSnapshot();
  });
});

