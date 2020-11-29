import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Logo from "./logo";


it(`renders correctly`, () => {
  const logo = renderer
    .create(
        <BrowserRouter>
          <Logo/>
        </BrowserRouter>
    )
    .toJSON();

  expect(logo).toMatchSnapshot();
});
