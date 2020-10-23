import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CartMovie from "../cart-movie/cart-movie";
import {filmType} from "../../types/index";

export default class CartMovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null,
    };

    this.onHoverCard = this.onHoverCard.bind(this);
  }

  onHoverCard(id) {
    const currentMovie = this.props.movies.find((movie) => movie.id === id);

    this.setState(() => {
      return {
        activeMovie: currentMovie,
      };
    });
  }

  render() {

    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((item) => {
          const {name, picture, id} = item;

          return (
            <CartMovie
              key={`${id}-i`}
              name={name}
              picture={picture}
              id={id}
              onHoverCard={this.onHoverCard}
            />
          );
        })}
      </div>
    );
  }
}

CartMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired
};
