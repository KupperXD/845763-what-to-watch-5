
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from './../logo/logo.jsx';

const Header = ({className, title, breadcrumbs, user}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo/>

      {breadcrumbs}

      <h1 className="page-title user-page__title">{title}</h1>

      <div className="user-block">
        {user.id ? (<div className="user-block__avatar">
          <Link to={`/mylist`}>
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link></div>
        ) : (<Link to={`/login`} className="user-block__link">Sign in</Link>)}
      </div>
    </header>
  );
};

Header.defaultProps = {
  user: {
    id: null,
  },
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.object,
  breadcrumbs: PropTypes.any,
};

export default Header;
