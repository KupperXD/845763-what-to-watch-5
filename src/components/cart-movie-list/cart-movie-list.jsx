import React from "react";
import PropTypes from "prop-types";
import CartMovie from "../cart-movie/cart-movie";
import {filmType} from "../../types/index";

const CartMovieList = (props) => {
  const {movies, activeMovie, onHoverCard, onLeaveCard} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((item, index) => {
        const {name, id, posterImage, previewVideoLink} = item;

        return (
          <CartMovie
            key={`${id}-i`}
            name={name}
            picture={posterImage}
            video={previewVideoLink}
            id={id}
            isPlaying={(activeMovie - 1) === index}
            onHoverCard={onHoverCard}
            onLeaveCard={onLeaveCard}
          />
        );
      })}
    </div>
  );
};


CartMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  activeMovie: PropTypes.number.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
  onHoverCard: PropTypes.func.isRequired,
};

export default CartMovieList;
