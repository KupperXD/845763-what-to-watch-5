import React, {PureComponent, Fragment, createRef} from 'react';
import {PropTypes} from 'prop-types';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
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

    render() {
      const {isPlaying, previewVideoLink, previewImage} = this.props;

      return (
        <Component
          {...this.props}
          renderVideo={() => {

            return (
              <Fragment>
                <video
                  muted={true}
                  autoPlay={isPlaying}
                  ref={this._videoRef}
                  controls={false}
                  poster={previewImage}
                  style={{
                    objectFit: `cover`,
                    maxWidth: `100%`,
                  }}
                >
                  <source src={previewVideoLink} type={`video/${this._getFormatVideo(previewVideoLink)}`}/>
                </video>
              </Fragment>
            );
          }}
        >
        </Component>
      );
    }

  }
  WithVideoPlayer.propTypes = {
    previewVideoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };


  return WithVideoPlayer;
};

export default withVideoPlayer;

