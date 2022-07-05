import React from 'react';
import styles from './Banner.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Banner = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.bannerContent}>
      <h4>Lorem ipsum</h4>
      <h1>Personalized T-shirts</h1>
      <p>Suspendisse vitae tempor mi. Vestibulum a est condimentum eros suscipit egestas a non tortor. Fusce commodo dui a.</p>
      <Button>Shop now</Button>
    </div>
    <img src='../../images/Banner/tshirtOrange.png' alt='' />
  </div>
);

Banner.propTypes = {
};

export default Banner;
