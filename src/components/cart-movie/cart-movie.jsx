import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player';

const CartMovie = (props) => {
  const {name, previewImage, id, previewVideoLink, onHoverCard, onLeaveCard, isPlaying} = props;
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onHoverCard(id);
        }}
        onMouseOut={() => {
          onLeaveCard();
        }}>
        <Link to={`/films/${id}`} className="small-movie-card__link">
          <VideoPlayer
            muted={true}
            isPlaying={isPlaying}
            src={previewVideoLink}
            picture={previewImage}
          />
          <h3 className="small-movie-card__title">
            {name}
          </h3>
        </Link>
      </article>
    </React.Fragment>
  );
};

CartMovie.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
};

export default CartMovie;
