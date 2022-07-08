import React from 'react';
import styles from './Login.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import LoginHandler from '../../features/LoginHandler/LoginHandler';

const Login = () => (
  <div className={styles.root}>
    <LoginHandler />
  </div>
);

Login.propTypes = {
};

export default Login;
