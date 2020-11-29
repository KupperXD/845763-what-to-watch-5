import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import ReviewPost from "./review-post";

const noop = () => {};

it(`renders correctly`, () => {
  const reviewPost = renderer
    .create(
        <BrowserRouter>
          <ReviewPost
            handleFieldChange={noop}
            handleSubmit={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(reviewPost).toMatchSnapshot();
});
