import React from 'react';
import styles from './ProductsContainer.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = () => (
  <div className={styles.root}>
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
  </div>
);

ProductsContainer.propTypes = {
};

export default ProductsContainer;
