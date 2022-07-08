import React from 'react';
import styles from './FavoritesLayout.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ProductRow from '../../common/ProductRow/ProductRow';

const FavoritesLayout = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.header}>
      <span>Favorites</span>
    </div>
    <ProductRow actionText='Add to cart' />
    <ProductRow actionText='Add to cart' />
    <ProductRow actionText='Add to cart' />
  </div>
);

FavoritesLayout.propTypes = {
};

export default FavoritesLayout;
