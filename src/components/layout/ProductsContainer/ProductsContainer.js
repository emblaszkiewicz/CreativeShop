import React from 'react';
import styles from './ProductsContainer.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = () => (
  <div className={styles.root}>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
    <NavLink to='/product/1'>
      <ProductBox />
    </NavLink>
  </div>
);

ProductsContainer.propTypes = {
};

export default ProductsContainer;
