import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({film}) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={`/films/${film.id}`}
            className="breadcrumbs__link"
          >
            {film.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Breadcrumbs;
