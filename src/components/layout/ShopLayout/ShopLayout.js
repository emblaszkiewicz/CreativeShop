import React from 'react';
import styles from './ShopLayout.module.scss';
import { useState } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FilterBox from '../../features/FilterBox/FilterBox';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

const ShopLayout = () => {

  const [category, setCategory] = useState();

  const handleCategoryChange = cat => {
    setCategory(cat);
  };

  return (
    <div className={clsx('container', styles.root)}>
      <FilterBox handleCategoryChange={handleCategoryChange} />
      <ProductsContainer category={category} />
    </div>
  );
};

ShopLayout.propTypes = {
};

export default ShopLayout;
