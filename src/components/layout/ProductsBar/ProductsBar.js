import React from 'react';
import styles from './ProductsBar.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsBar = ({title}) => (
  <div className={styles.root}>
    <SectionTitle title={title} />
    <div className='container'>
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </div>
  </div>
);

ProductsBar.propTypes = {
  title: PropTypes.string,
};

export default ProductsBar;
