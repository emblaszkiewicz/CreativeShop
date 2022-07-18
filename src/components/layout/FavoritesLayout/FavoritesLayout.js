import React from 'react';
import styles from './FavoritesLayout.module.scss';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';

//import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getAllFavorites, removeFromFavorites } from '../../../../src/redux/favoritesRedux.js';

import ProductRow from '../../common/ProductRow/ProductRow';

const FavoritesLayout = () => {

  const dispatch = useDispatch();

  const favorites = useSelector(getAllFavorites);

  const handleRemove = id => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className={clsx('container', styles.root)}>
      <div className={styles.header}>
        <span>Favorites</span>
      </div>
      {
        favorites.map(favorite =>
          <ProductRow key={favorite.id} {...favorite} actionText='Go to product' actionHandler={handleRemove} />
        )
      }
    </div>
  );
};

FavoritesLayout.propTypes = {
};

export default FavoritesLayout;
