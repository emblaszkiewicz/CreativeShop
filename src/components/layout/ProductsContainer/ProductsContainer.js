import React from 'react';
import styles from './ProductsContainer.module.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';

import { getAllProducts } from '../../../../src/redux/productsRedux.js';

import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = () => {

  const products = useSelector(getAllProducts);

  console.log(products);

  return (
    <div className={styles.root}>
      {products.map(product =>
        <NavLink key={product.id} to='/product/1'>
          <ProductBox {...product} />
        </NavLink>
      )}
    </div>
  );
};

ProductsContainer.propTypes = {
};

export default ProductsContainer;
