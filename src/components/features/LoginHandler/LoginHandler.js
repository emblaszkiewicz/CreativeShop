import React from 'react';
import styles from './LoginHandler.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

//import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../../common/Button/Button';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const LoginHandler = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.loginBox}>
      <Button variant='login'>
        <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
        <span>Login with Google</span>
      </Button>
    </div>
  </div>
);

LoginHandler.propTypes = {
};

export default LoginHandler;
