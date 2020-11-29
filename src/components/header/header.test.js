import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import Header from "./header";

const component = () => {
  return (
    <div/>
  );
};

it(`renders correctly`, () => {
  const header = renderer
    .create(
        <BrowserRouter>
          <Header
            className={``}
            breadcrumbs={component}
            title={``}
            user={{}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(header).toMatchSnapshot();
});
