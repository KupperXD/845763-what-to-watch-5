import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const CartMovie = (props) => {
    const {name, picture, id, onHoverHandler} = props;

    return (
        <React.Fragment>
        <article className="small-movie-card catalog__movies-card"
                onMouseOver={() => {
                    onHoverHandler(id);
                    console.log('test');
                }}>
            <div className="small-movie-card__image">
              <img src={picture} alt={name} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
    <Link to={`films/${id}`} className="small-movie-card__link">{name}</Link>
            </h3>
          </article>
        </React.Fragment>
    );
};

CartMovie.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onHoverHandler: PropTypes.func.isRequired,
};

export default CartMovie;