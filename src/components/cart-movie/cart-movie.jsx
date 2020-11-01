import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player';

const CartMovie = (props) => {
  const {name, picture, id, video, onHoverCard, onAnHoverCard, isPlaying} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onHoverCard(id);
        }}
        onMouseOut={() => {
          onAnHoverCard();
        }}>
        <div className="small-movie-card__image">
          <VideoPlayer
            muted={true}
            isPlaying={isPlaying}
            src={video}
            poster={picture}
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={`films/${id}`} className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

CartMovie.propTypes = {
  video: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onAnHoverCard: PropTypes.func.isRequired,
};

export default CartMovie;
