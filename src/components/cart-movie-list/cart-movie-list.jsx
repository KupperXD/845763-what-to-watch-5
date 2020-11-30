import React from "react";
import PropTypes from "prop-types";
import CartMovie from "../cart-movie/cart-movie";
import ShowMore from "../show-more/show-more";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import {filmType} from "../../types/index";

const CartMovieWrapped = withVideoPlayer(CartMovie);

const CartMovieList = (props) => {
  const {movies, activeMovie, onHoverCard, onLeaveCard, onClickShowMore, showFilms, isShowMore = true} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {[...movies].slice(0, showFilms).map((item) => {
          const {name, id, previewImage, previewVideoLink} = item;

          return (
            <CartMovieWrapped
              key={`${id}-i`}
              name={name}
              previewImage={previewImage}
              previewVideoLink={previewVideoLink}
              id={id}
              isPlaying={activeMovie === id}
              onHoverCard={onHoverCard}
              onLeaveCard={onLeaveCard}
            />
          );
        })}
      </div>
      { (isShowMore && <ShowMore onClickButton={onClickShowMore} isShow={showFilms < movies.length}/>)}

    </React.Fragment>
  );
};

CartMovieList.defaultProps = {
  moviesQuantity: 8,
};


CartMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  moviesQuantity: PropTypes.number,
  activeMovie: PropTypes.number.isRequired,
  isShowMore: PropTypes.bool,
  showFilms: PropTypes.number.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onClickShowMore: PropTypes.func.isRequired,
};

export default CartMovieList;
