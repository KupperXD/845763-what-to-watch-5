import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types";

const withCartMovieList = (Component) => {
  class WithCartMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovie: -1,
        timeoutPlayMovie: null,
      };

      this.onHoverCard = this.onHoverCard.bind(this);
      this.onLeaveCard = this.onLeaveCard.bind(this);
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

    onLeaveCard() {
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
      const {activeMovie} = this.state;

      return (
        <Component
          {...this.props}
          activeMovie={activeMovie}
          onHoverCard={this.onHoverCard}
          onLeaveCard={this.onLeaveCard}
        >

        </Component>
      );
    }
  }

  WithCartMovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired
  };

  return WithCartMovieList;
};

export default withCartMovieList;

