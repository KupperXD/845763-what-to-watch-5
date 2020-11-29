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
        showFilms: props.moviesQuantity,
      };

      this.onHoverCard = this.onHoverCard.bind(this);
      this.onLeaveCard = this.onLeaveCard.bind(this);
      this.onClickShowMore = this.onClickShowMore.bind(this);
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

    onClickShowMore() {
      const {showFilms} = this.state;
      const {movies} = this.props;

      this.setState({
        showFilms: showFilms < movies.length ? showFilms + parseInt(this.props.moviesQuantity, 10) : movies.length,
      });
    }

    render() {
      const {activeMovie, showFilms} = this.state;

      return (
        <Component
          {...this.props}
          activeMovie={activeMovie}
          showFilms={showFilms}
          onHoverCard={this.onHoverCard}
          onLeaveCard={this.onLeaveCard}
          onClickShowMore={this.onClickShowMore}
        >

        </Component>
      );
    }
  }

  WithCartMovieList.defaultProps = {
    moviesQuantity: 8,
  };

  WithCartMovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
    moviesQuantity: PropTypes.number,
    isShowMore: PropTypes.bool,
  };

  return WithCartMovieList;
};

export default withCartMovieList;
