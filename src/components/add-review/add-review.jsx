import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filmType} from '../../types/index';
import ReviewPost from '../review-post/review-post';
import withFieldChange from "../../hocs/with-field-change/with-field-change";

const ReviewPostWrapped = withFieldChange(ReviewPost);

const AddReview = (props) => {

  const {id, name, posterImage} = props.film;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={posterImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218"
              height="327"/>
          </div>
        </div>

        <ReviewPostWrapped />

      </section>
    </React.Fragment>);
};

AddReview.propTypes = {
  film: PropTypes.shape(filmType).isRequired
};

export default AddReview;
