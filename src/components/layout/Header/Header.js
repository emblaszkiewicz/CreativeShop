import React from 'react';
import styles from './Header.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import TopBar from '../TopBar/TopBar';

const Header = () => (
  <div className={styles.root}>
    <TopBar />
  </div>
);

Header.propTypes = {
};

export default Header;
