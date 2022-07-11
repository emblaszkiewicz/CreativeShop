import React from 'react';
import styles from './ProductsContainer.module.scss';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';

import { getAllProducts } from '../../../../src/redux/productsRedux.js';

import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = () => {

  const products = useSelector(getAllProducts);
  const pagesAmount = Math.ceil(products.length / 8);

  const [activePage, setActivePage] = useState(0);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const pages = [];
  for (let i = 0; i < pagesAmount; i++) {
    pages.push(
      <li key={i} onClick={() => handlePageChange(i)} className={i === activePage ? styles.active : ''}></li>
    );
  }

  return (
    <div className={styles.root}>
      {products.slice(
        activePage * 8,
        (activePage + 1) * 8)
        .map(product =>
          <NavLink key={product.id} to='/product/1'>
            <ProductBox {...product} />
          </NavLink>
        )}
      <ul className={styles.pagesContainer}>
        {pages}
      </ul>
    </div>
  );
};

ProductsContainer.propTypes = {
};

export default ProductsContainer;
