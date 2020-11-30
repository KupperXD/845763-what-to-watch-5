import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const CartMovie = (props) => {
  const {name, id, onHoverCard, onLeaveCard, renderVideo} = props;
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

          {renderVideo()}

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
  renderVideo: PropTypes.func.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
};

export default CartMovie;
