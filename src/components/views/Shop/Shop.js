import React from 'react';
import styles from './Shop.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ShopLayout from '../../layout/ShopLayout/ShopLayout';

const Shop = () => (
  <div className={styles.root}>
    <ShopLayout />
  </div>
);

Shop.propTypes = {
};

export default Shop;
