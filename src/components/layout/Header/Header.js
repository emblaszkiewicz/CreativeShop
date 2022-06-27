import React from 'react';
import styles from './Header.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

const Header = () => (
  <div className={styles.root}>
    <h2>Header</h2>
  </div>
);

Header.propTypes = {
};

export default Header;
