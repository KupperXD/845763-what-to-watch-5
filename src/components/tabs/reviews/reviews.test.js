import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Reviews from "./reviews";

it(`renders correctly`, () => {
  const reviews = renderer
    .create(
        <BrowserRouter>
          <Reviews
            comments={[]}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(reviews).toMatchSnapshot();
});
