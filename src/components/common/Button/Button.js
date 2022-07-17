import React from 'react';
import styles from './Button.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const Button = ({ variant, onClick, children }) => {

  const classes = [];
  if(variant) classes.push(styles[variant],);

  return (
    <button className={clsx(styles.root, classes)} aria-label='button' onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
