import React from 'react';
import styles from './ProductsBar.module.scss';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import { randomProducts } from '../../../utils/randomProducts.js';

import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ProductBox from '../../common/ProductBox/ProductBox';

const ProductsBar = ({ selectBy, title }) => {

  const products = useSelector(selectBy);

  return (
    <div className={styles.root}>
      <SectionTitle title={title} />
      <div className='container'>
        {randomProducts(products).map(product =>
          <NavLink key={product._id} to={`/product/${product._id}`}>
            <ProductBox {...product} />
          </NavLink>
        )}
      </div>
    </div>
  );
};

ProductsBar.propTypes = {
  selectBy: PropTypes.func,
  title: PropTypes.string,
};

export default ProductsBar;
