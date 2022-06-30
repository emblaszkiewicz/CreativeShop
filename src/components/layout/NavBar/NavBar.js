import React from 'react';
import styles from './NavBar.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const NavBar = () => (
  <nav className={styles.root}>
    <ul>
      <NavLink to='/' className={styles.active}>Home</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/about'>About us</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </ul>
  </nav>
);

NavBar.propTypes = {
};

export default NavBar;
