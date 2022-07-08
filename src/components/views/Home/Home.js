import React from 'react';
import styles from './Home.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import CarouselBar from '../../common/CarouselBar/CarouselBar';
import ProductsBar from '../../layout/ProductsBar/ProductsBar';
import OpinionsBar from '../../layout/OpinionsBar/OpinionsBar';
import FeatureBar from '../../layout/FeatureBar/FeatureBar';
import Banner from '../../layout/Banner/Banner';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';

const Home = () => (
  <div className={styles.root}>
    <CarouselBar />
    <ProductsBar title='Sale' />
    <ProductsBar title='Featured' />
    <OpinionsBar />
    <FeatureBar />
    <Banner />
    <BrandsBar />
  </div>
);

Home.propTypes = {
};

export default Home;
