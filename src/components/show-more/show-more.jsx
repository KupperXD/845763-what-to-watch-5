import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({onClickButton, isShow}) => {
  return (
    <div className="catalog__more" style={{display: isShow ? `block` : `none`}}>
      <button
        className="catalog__button"
        type="button"
        onClick={onClickButton}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func,
};

export default ShowMore;
