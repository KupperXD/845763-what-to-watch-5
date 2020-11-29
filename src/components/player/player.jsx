import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getElapsedTime} from "../../utils";
import withBigPlayer from "../../hocs/with-big-player/with-big-player";

const Player = (props) => {
  const {film, isPlaying, duration, progress, onPlayBtnClick, onFullscreenBtnClick, renderPlayer} = props;

  const {name} = film;
  const togglerState = progress / duration * 100;

  return (
    <div className="player">
      {renderPlayer(film)}

      <Link to={`/`} type="button" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: togglerState + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getElapsedTime(duration, progress)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayBtnClick} type="button" className="player__play">

            {
              isPlaying
                ? <React.Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>
                : <React.Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </React.Fragment>
            }
          </button>

          <div className="player__name">{name}</div>

          <button onClick={onFullscreenBtnClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: PropTypes.object,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onFullscreenBtnClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};


export {Player};
export default withBigPlayer(Player);
