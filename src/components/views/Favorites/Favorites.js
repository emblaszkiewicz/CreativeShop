import React from 'react';
import styles from './Favorites.module.scss';

//import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FavoritesLayout from '../../layout/FavoritesLayout/FavoritesLayout';

const Favorites = () => (
  <div className={styles.root}>
    <FavoritesLayout />
  </div>
);

Favorites.propTypes = {
};

export default Favorites;
