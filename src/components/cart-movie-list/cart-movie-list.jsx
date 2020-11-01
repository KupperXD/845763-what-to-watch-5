import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CartMovie from "../cart-movie/cart-movie";
import {filmType} from "../../types/index";

export default class CartMovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: -1,
      timeoutPlayMovie: null,
    };

    this.onHoverCard = this.onHoverCard.bind(this);
    this.onAnHoverCard = this.onAnHoverCard.bind(this);
  }

  onHoverCard(id) {
    const currentMovie = this.props.movies.find((movie) => movie.id === id);

    this.setState((prevState) => {

      if (prevState.timeoutPlayMovie) {
        clearTimeout(prevState.timeoutPlayMovie);
      }

      return {
        timeoutPlayMovie: setTimeout(() => {
          this.setState({activeMovie: currentMovie.id});
        }, 1000)
      };
    });
  }

  onAnHoverCard() {
    this.setState((prevState) => {
      if (prevState.timeoutPlayMovie) {
        clearTimeout(prevState.timeoutPlayMovie);
      }

      return {
        activeMovie: -1,
        timeoutPlayMovie: null,
      };
    });
  }

  render() {

    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((item, index) => {
          const {name, picture, id, video} = item;
          const {activeMovie} = this.state;

          return (
            <CartMovie
              key={`${id}-i`}
              name={name}
              picture={picture}
              video={video}
              id={id}
              isPlaying={activeMovie === index}
              onHoverCard={this.onHoverCard}
              onAnHoverCard={this.onAnHoverCard}
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
