import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";

import VideoPlayer from "./video-player";


it(`renders correctly`, () => {
  const videoPlayer = renderer
    .create(
        <BrowserRouter>
          <VideoPlayer
            isPlaying={true}
            muted={true}
            picture={``}
            src={``}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(videoPlayer).toMatchSnapshot();
});
