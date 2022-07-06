import React from 'react';
import styles from './ProductBox.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const ProductBox = () => (
  <div className={styles.root}>
    <img src='../../images/Products/tshirts/tshirtGrey.png' alt='' />
    <div className={styles.boxContent}>
      <p>T-shirt Grey</p>
      <span>$49</span>
      <div className={styles.benefits}>Sale!</div>
      <div className={styles.benefits}>Featured</div>
    </div>
  </div>
);

ProductBox.propTypes = {
};

export default ProductBox;
