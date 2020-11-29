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
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
    }
  }


  render() {
    const {isPlaying, muted, src, picture} = this.props;

    return (
      <Fragment>
        <video
          muted={muted}
          autoPlay={isPlaying}
          ref={this._videoRef}
          controls={false}
          poster={picture}
          style={{
            objectFit: `cover`,
            maxWidth: `100%`,
          }}
        >
          <source src={src} type={`video/${this._getFormatVideo(src)}`}/>
        </video>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      this._resetVideo(video);
    }
  }

  _getFormatVideo(src) {
    const getArray = src.split(`.`);
    const format = getArray[getArray.length - 1];
    return format;
  }

  _resetVideo(video) {
    if (video) {
      video.currentTime = 0;
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
