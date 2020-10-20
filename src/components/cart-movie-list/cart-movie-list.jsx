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

        this.onHoverHandler = this.onHoverHandler.bind(this);
    }

    render() {

        return (
            <div className="catalog__movies-list">
                {this.props.movies.map((item, i) => {
                    const {name, picture, id} = item;

                    return (
                        <CartMovie
                            key={`${id}-i`}
                            name={name}
                            picture={picture}
                            id={id}
                            onHoverHandler={this.onHoverHandler}
                        />
                    );
                })}
            </div>
        );
    }

    onHoverHandler(id) {
        const currentMovie = this.props.movies.find((movie) => movie.id === id);

        this.setState((oldState) => {
            return {
                activeMovie: (oldState.activeMovie !== currentMovie) ? currentMovie : oldState.activeMovie, 
            }
        });
    }
}

CartMovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired
};