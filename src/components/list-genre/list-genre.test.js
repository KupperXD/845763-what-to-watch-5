import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import {ListGenre} from "./list-genre";

const noop = () => {};

it(`renders correctly`, () => {
  const listGenre = renderer
    .create(
        <BrowserRouter>
          <ListGenre
            films={films}
            onClickGenreFilter={noop}
            genre={`All`}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(listGenre).toMatchSnapshot();
});
