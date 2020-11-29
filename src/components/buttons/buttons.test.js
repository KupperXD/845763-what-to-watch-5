import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Buttons from "./buttons";

const noop = () => {};


it(`renders correctly isReview true`, () => {
  const buttons = renderer
    .create(
        <BrowserRouter>
          <Buttons
            user={{}}
            film={{}}
            isReview={true}
            clickHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(buttons).toMatchSnapshot();
});

it(`renders correctly isReview false`, () => {
  const buttons = renderer
    .create(
        <BrowserRouter>
          <Buttons
            user={{}}
            film={{}}
            isReview={false}
            clickHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(buttons).toMatchSnapshot();
});
