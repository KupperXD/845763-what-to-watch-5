import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import Tabs from "./tabs";

const noop = () => {};


it(`renders correctly`, () => {
  const tabs = renderer
    .create(
        <BrowserRouter>
          <Tabs
            film={films[0]}
            clickHandler={noop}
            comments={[]}
            activeItem={``}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tabs).toMatchSnapshot();
});
