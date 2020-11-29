import React, {PureComponent, createRef} from "react";

const withBigPlayer = (Component) => {
  class WithBigPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._onPlayBtnClickHandler = this._onPlayBtnClickHandler.bind(this);
      this._onFullscreenBtnClickHandler = this._onFullscreenBtnClickHandler.bind(this);

      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        duration: 0,
        progress: 0,
      };
    }

    componentDidMount() {
      this._videoRef.current.oncanplay = () => {
        this.setState({
          duration: Math.floor(this._videoRef.current.duration),
        });
      };

      this._videoRef.current.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(this._videoRef.current.currentTime),
        });
      };
    }

    componentDidUpdate() {
      if (this.state.isPlaying) {
        this._videoRef.current.play();
      } else {
        this._videoRef.current.pause();
      }
    }

    componentWillUnmount() {
      this._videoRef.current.oncanplay = null;
      this._videoRef.current.ontimeupdate = null;
    }

    _onPlayBtnClickHandler() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    _onFullscreenBtnClickHandler() {
      this._videoRef.current.requestFullscreen();
    }

    render() {
      const {isPlaying, duration, progress} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayBtnClick={this._onPlayBtnClickHandler}
          onFullscreenBtnClick={this._onFullscreenBtnClickHandler}
          renderPlayer={(film) => {
            return (
              <video
                className="player__video"
                ref={this._videoRef}
                src={film.videoLink}
                image={film.previewImage}
                controls={false}
              ></video>
            );
          }}
        />
      );
    }
  }

  return WithBigPlayer;
};

export default withBigPlayer;
