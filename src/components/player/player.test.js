import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import films from "../../mocks/films";

import {Player} from "./player";

const noop = () => {};

const component = () => {
  return (
    <div/>
  );
};


it(`renders correctly`, () => {
  const player = renderer
    .create(
        <BrowserRouter>
          <Player
            isPlaying={false}
            duration={1}
            onFullscreenBtnClick={noop}
            onPlayBtnClick={noop}
            progress={12}
            film={films[0]}
            renderPlayer={component}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(player).toMatchSnapshot();
});
