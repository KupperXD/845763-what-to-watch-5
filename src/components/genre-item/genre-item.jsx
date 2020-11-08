import React from 'react';
import PropTypes from 'prop-types';

const GenreItem = (props) => {
  const {name, className, onClickGenreFilter} = props;

  return (
    <li className={`catalog__genres-item ${className}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(e) => {
          e.preventDefault();

          onClickGenreFilter(name);
        }}
      >
        {name}</a>
    </li>
  );
};

GenreItem.propTypes = {
  onClickGenreFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GenreItem;
