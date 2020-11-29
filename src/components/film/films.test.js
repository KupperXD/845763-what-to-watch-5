import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import {Film} from "./film";

const noop = () => {};

it(`renders correctly`, () => {
  const cartMovieList = renderer
    .create(
        <BrowserRouter>
          <Film
            films={films}
            match={{params: {id: 1}}}
            addFavoriteAction={noop}
            comments={[{}]}
            film={films[0]}
            loadCommentsAction={noop}
            removeFavoriteAction={noop}
            user={{}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(cartMovieList).toMatchSnapshot();
});
