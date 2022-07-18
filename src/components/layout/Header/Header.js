import React from 'react';
import styles from './Header.module.scss';

//import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import TopBar from '../TopBar/TopBar';
import NavBar from '../NavBar/NavBar';

const Header = () => (
  <div className={styles.root}>
    <TopBar />
    <NavBar />
  </div>
);

Header.propTypes = {
};

export default Header;
