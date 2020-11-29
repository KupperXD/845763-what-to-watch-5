import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {AddReview} from "./add-review";

const noop = () => {};

it(`renders correctly`, () => {
  const logo = renderer
    .create(
        <BrowserRouter>
          <AddReview
            user={{}}
            film={{}}
            form={{}}
            setValue={noop}
            addCommentsAction={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(logo).toMatchSnapshot();
});
