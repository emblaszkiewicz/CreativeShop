import React from 'react';
import styles from './Home.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ProductsBar from '../../layout/ProductsBar/ProductsBar';
import FeatureBar from '../../layout/FeatureBar/FeatureBar';
import Banner from '../../layout/Banner/Banner';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';

const Home = () => (
  <div className={styles.root}>
    <ProductsBar title='Sale' />
    <ProductsBar title='Featured' />
    <FeatureBar />
    <Banner />
    <BrandsBar />
  </div>
);

Home.propTypes = {
};

export default Home;
