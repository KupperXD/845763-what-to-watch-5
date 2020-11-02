import React, {PureComponent, Fragment, createRef} from 'react';
import {PropTypes} from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }


  render() {
    const {isPlaying, muted} = this.props;

    return (
      <Fragment>
        <video
          muted={muted}
          autoPlay={isPlaying}
          ref={this._videoRef}
          style={{
            objectFit: `cover`,
            maxWidth: `100%`,
          }}
        >

        </video>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
