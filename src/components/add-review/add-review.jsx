import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from "../../store/stateApplication/selectors";
import {addComments} from "../../store/api-action";

import Header from './../header/header.jsx';
import Breadcrumbs from './../breadcrumbs/breadcrumbs.jsx';
import withFormData from './../../hocs/with-form-data/with-form-data.jsx';

const RATINGS = [`1`, `2`, `3`, `4`, `5`];
const RATING_NAME = `rating`;
const TEXTAREA_NAME = `comment`;
const MIN_LENGTH_TEXT = 50;
const MAX_LENGTH_TEXT = 400;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._changeHandler = this._changeHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
  }


  _renderTextarea() {
    const {form} = this.props;
    const textValue = form[TEXTAREA_NAME];
    return (
      <textarea
        className="add-review__textarea"
        name={TEXTAREA_NAME}
        id={TEXTAREA_NAME}
        placeholder="Review text"
        value={textValue}
        onChange={this._changeHandler}
        minLength={MIN_LENGTH_TEXT}
        maxLength={MAX_LENGTH_TEXT}
      >
      </textarea>
    );
  }

  _renderRating(value) {
    const {form} = this.props;
    const rating = form[RATING_NAME];
    return (
      <React.Fragment key={`raring-${value}`}>
        <input
          className="rating__input"
          id={`star-${value}`}
          type="radio"
          name={RATING_NAME}
          value={value}
          checked={rating === value}
          onChange={this._changeHandler}
        />
        <label
          className="rating__label"
          htmlFor={`star-${value}`}
        >
          Rating {value}
        </label>
      </React.Fragment>
    );
  }

  _changeHandler(evt) {
    const {setValue} = this.props;
    const target = evt.target;

    if (target) {
      setValue(target.name, target.value);
    }
  }

  _submitHandler(evt) {
    const {film, form, addCommentsAction} = this.props;
    const {rating, comment} = form;

    evt.preventDefault();

    if (rating && comment && comment.length >= MIN_LENGTH_TEXT && comment.length <= MAX_LENGTH_TEXT) {
      addCommentsAction(film.id, rating, comment);
    }
  }

  render() {
    const {user, film} = this.props;

    if (!film) {
      return null;
    }

    return (
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: film.backgroundColor || `#fff`}}
      >
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header user={user}
            breadcrumbs={<Breadcrumbs film={film}/>}
          />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this._submitHandler}>
            <div className="rating">
              <div className="rating__stars">
                {RATINGS.map((rating) => this._renderRating(rating))}
              </div>
            </div>

            <div className="add-review__text" style={{backgroundColor: `#fff`}}>
              {this._renderTextarea()}
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  user: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  addCommentsAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispachToProps = (dispatch) => ({
  addCommentsAction: (id, rating, comment) => dispatch(addComments(id, rating, comment)),
});

const WithFormReview = withFormData(AddReview);

export {AddReview};

export default connect(mapStateToProps, mapDispachToProps)(WithFormReview);
