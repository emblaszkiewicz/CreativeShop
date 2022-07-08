import React from 'react';
import styles from './ProductBox.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const ProductBox = product => (
  <div className={styles.root}>
    <img src={product.image} alt='' />
    <div className={styles.boxContent}>
      <p>{product.name}</p>
      <span>${product.price}</span>
      {product.sale &&
        <div className={styles.benefits}>Sale!</div>
      }
      {product.featured &&
        <div className={styles.benefits}>Featured</div>
      }
    </div>
  </div>
);

ProductBox.propTypes = {
};

export default ProductBox;
