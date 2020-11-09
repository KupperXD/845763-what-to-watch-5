import React from 'react';
import PropTypes from 'prop-types';
import GenreItem from './genre-item';

const GenreItemActive = (props) => {

  const {className = ``} = props;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <GenreItem
      className={`${className} catalog__genres-item--active`}
      {...restProps} />
  );
};

GenreItemActive.propTypes = {
  className: PropTypes.string,
};

export default GenreItemActive;

