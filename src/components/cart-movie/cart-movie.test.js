import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import CartMovie from "./cart-movie";

const noop = () => {};


it(`renders correctly`, () => {
  const cartMovie = renderer
    .create(
        <BrowserRouter>
          <CartMovie
            previewVideoLink={``}
            name={``}
            previewImage={``}
            id={1}
            isPlaying={true}
            onHoverCard={noop}
            onLeaveCard={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(cartMovie).toMatchSnapshot();
});
