import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import {MyList} from "./my-list";

const noop = () => {};


it(`renders correctly`, () => {
  const myList = renderer
    .create(
        <BrowserRouter>
          <MyList
            user={{}}
            favorites={films}
            loadFavorites={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(myList).toMatchSnapshot();
});
