import React from 'react';
import styles from './ShopLayout.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FilterBox from '../../features/FilterBox/FilterBox';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const ShopLayout = () => (
  <div className={clsx('container', styles.root)}>
    <FilterBox />
    <ProductsContainer />
  </div>
);

ShopLayout.propTypes = {
};

export default ShopLayout;
