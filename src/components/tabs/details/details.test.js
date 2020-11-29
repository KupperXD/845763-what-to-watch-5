import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../../mocks/films";

import Details from "./details";

it(`renders correctly`, () => {
  const details = renderer
    .create(
        <BrowserRouter>
          <Details
            film={films[0]}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(details).toMatchSnapshot();
});
