import React from 'react';
import PropTypes from 'prop-types';

const ReviewPost = (props) => {
  const {handleSubmit, handleFieldChange} = props;

  return (
    <div className="add-review">
      <form action="#" onSubmit={handleSubmit} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input onChange={handleFieldChange} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
            <label onChange={handleFieldChange} className="rating__label" htmlFor="star-2">Rating 2</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
            <label onChange={handleFieldChange} className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

ReviewPost.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default ReviewPost;
