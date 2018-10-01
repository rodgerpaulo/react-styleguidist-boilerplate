import React from 'react';
import { string } from 'prop-types';
import logo from 'javascripts/screens/logo.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = props => {
  const { className, ...rest } = props;
  const classes = classNames('header', className);

  return (
    <header className={classes} {...rest}>
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">Welcome to React</h1>
      <Link className="header__link" to="/home">
        Home
      </Link>
      <Link className="header__link" to="/contact">
        Contact Us
      </Link>
    </header>
  );
};

Header.propTypes = {
  /**
   * Header classNames
   */
  className: string
};

Header.defaultProps = {
  className: ''
};

export default Header;
