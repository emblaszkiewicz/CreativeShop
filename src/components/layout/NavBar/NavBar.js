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
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>Shop</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About us</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {
};

export default NavBar;
