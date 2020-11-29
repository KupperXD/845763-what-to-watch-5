import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import GenreItem from "./genre-item";

const noop = () => {};

it(`renders correctly`, () => {
  const genreItem = renderer
    .create(
        <BrowserRouter>
          <GenreItem
            name={``}
            onClickGenreFilter={noop}
            className={``}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(genreItem).toMatchSnapshot();
});
