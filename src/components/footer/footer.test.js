import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Footer from "./footer";

it(`renders correctly`, () => {
  const footer = renderer
    .create(
        <BrowserRouter>
          <Footer
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(footer).toMatchSnapshot();
});
