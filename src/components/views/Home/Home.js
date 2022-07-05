import React from 'react';
import styles from './Home.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import FeatureBar from '../../layout/FeatureBar/FeatureBar';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';

const Home = () => (
  <div className={styles.root}>
    <h2>Home</h2>
    <FeatureBar />
    <BrandsBar />
  </div>
);

Home.propTypes = {
};

export default Home;
