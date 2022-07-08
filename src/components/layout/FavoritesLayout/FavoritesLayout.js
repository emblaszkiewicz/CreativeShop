import React from 'react';
import styles from './FavoritesLayout.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FavoriteBox from '../../common/FavoriteBox/FavoriteBox';

const FavoritesLayout = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.header}>
      <span>Product name</span>
      <span>Price</span>
    </div>
    <FavoriteBox />
    <FavoriteBox />
    <FavoriteBox />
  </div>
);

FavoritesLayout.propTypes = {
};

export default FavoritesLayout;
