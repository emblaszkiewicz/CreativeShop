import React from 'react';
import styles from './BrandsBar.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const BrandsBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.separator}></div>
      <img src='../../images/BrandsBar/brand1.png' alt='' />
      <img src='../../images/BrandsBar/brand1.png' alt='' />
      <img src='../../images/BrandsBar/brand1.png' alt='' />
      <img src='../../images/BrandsBar/brand1.png' alt='' />
      <img src='../../images/BrandsBar/brand1.png' alt='' />
      <img src='../../images/BrandsBar/brand1.png' alt='' />
    </div>
  </div>
);

BrandsBar.propTypes = {
};

export default BrandsBar;
