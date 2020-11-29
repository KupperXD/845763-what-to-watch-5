import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Breadcrumbs from './breadcrumbs';

const film = {};

it(`renders correctly`, () => {
  const bread = renderer
    .create(<BrowserRouter>
      <Breadcrumbs film={film} />
    </BrowserRouter>).toJSON();

  expect(bread).toMatchSnapshot();
});
