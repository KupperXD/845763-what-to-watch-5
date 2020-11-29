import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import CartMovieList from "./cart-movie-list";

const noop = () => {};

it(`renders correctly`, () => {
  const cartMovieList = renderer
    .create(
        <BrowserRouter>
          <CartMovieList
            onLeaveCard={noop}
            onHoverCard={noop}
            activeMovie={1}
            movies={films}
            onClickShowMore={noop}
            showFilms={1}
            moviesQuantity={2}
            isShowMore={false}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(cartMovieList).toMatchSnapshot();
});
