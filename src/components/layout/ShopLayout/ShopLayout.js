import React from 'react';
import styles from './ShopLayout.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getSearchString, updateSearchString } from '../../../../src/redux/searchRedux.js';

import FilterBox from '../../features/FilterBox/FilterBox';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const ShopLayout = () => {

  const dispatch = useDispatch();

  const searchString = useSelector(getSearchString);

  const [category, setCategory] = useState();

  const handleCategoryChange = cat => {
    dispatch(updateSearchString(''));
    setCategory(cat);
  };

  return (
    <div className={clsx('container', styles.root)}>
      <FilterBox handleCategoryChange={handleCategoryChange} />
      <ProductsContainer category={category} searchString={searchString.searchString} />
    </div>
  );
};

ShopLayout.propTypes = {
};

export default ShopLayout;
