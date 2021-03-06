import React from 'react';
import styles from './ProductsContainer.module.scss';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';

import { getAllProducts, getProductsByCategory, getProductsBySearchString } from '../../../../src/redux/productsRedux.js';

import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsContainer = ({ category, searchString }) => {

  const [activePage, setActivePage] = useState(0);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const products = useSelector(state => {
    if (searchString !== '') {
      return getProductsBySearchString(state, searchString);
    } else if (!category || category === '62d063f0b44ccefe1a7279b8') {
      return getAllProducts(state);
    } else return getProductsByCategory(state, category);
  });

  const pagesAmount = Math.ceil(products.length / 8);

  const pages = [];
  for (let i = 0; i < pagesAmount; i++) {
    pages.push(
      <li key={i} onClick={() => handlePageChange(i)} className={i === activePage ? styles.active : ''}><span>{i + 1}</span></li>
    );
  }

  return (
    <div className={styles.root}>
      {products.slice(
        activePage * 8,
        (activePage + 1) * 8)
        .map(product =>
          <NavLink key={product._id} to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)}>
            <ProductBox {...product} />
          </NavLink>
        )}
      <ul className={styles.pagesContainer}>
        Page:
        {pages}
      </ul>
    </div>
  );
};

ProductsContainer.propTypes = {
  category: PropTypes.string,
  searchString: PropTypes.string,
};

export default ProductsContainer;
