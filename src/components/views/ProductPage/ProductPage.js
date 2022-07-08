import React from 'react';
import styles from './ProductPage.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import SingleProduct from '../../features/SingleProduct/SingleProduct';

const ProductPage = () => (
  <div className={styles.root}>
    <SingleProduct />
  </div>
);

ProductPage.propTypes = {
};

export default ProductPage;
