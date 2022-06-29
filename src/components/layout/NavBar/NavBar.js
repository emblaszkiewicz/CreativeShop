import React from 'react';
import styles from './NavBar.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const NavBar = () => (
  <nav className={styles.root}>
    <ul>
      <li className={styles.active}>Home</li>
      <li>Shop</li>
      <li>About us</li>
      <li>Contact</li>
    </ul>
  </nav>
);

NavBar.propTypes = {
};

export default NavBar;
