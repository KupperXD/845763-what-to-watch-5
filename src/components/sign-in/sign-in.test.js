import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import {SignIn} from "./sign-in";

const noop = () => {};

it(`renders correctly`, () => {
  const signIn = renderer
    .create(
        <BrowserRouter>
          <SignIn
            setValue={noop}
            onSubmit={noop}
            form={{}}
            user={{}}
            error={``}
            logError={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(signIn).toMatchSnapshot();
});
