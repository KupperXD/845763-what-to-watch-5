import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../../mocks/films";

import Overview from "./overview";

it(`renders correctly`, () => {
  const overview = renderer
    .create(
        <BrowserRouter>
          <Overview
            film={films[0]}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(overview).toMatchSnapshot();
});
