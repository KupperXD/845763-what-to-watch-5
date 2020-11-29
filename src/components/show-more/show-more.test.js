import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import ShowMore from "./show-more";

const noop = () => {};

it(`renders correctly`, () => {
  const showMore = renderer
    .create(
        <BrowserRouter>
          <ShowMore
            isShow={true}
            clickHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(showMore).toMatchSnapshot();
});
