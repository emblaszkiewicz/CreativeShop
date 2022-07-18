import React from 'react';
import styles from './Banner.module.scss';

//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Banner = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.bannerContent}>
      <h4>Lorem ipsum</h4>
      <h1>Personalized T-shirts</h1>
      <p>Suspendisse vitae tempor mi. Vestibulum a est condimentum eros suscipit egestas a non tortor. Fusce commodo dui a.</p>
      <NavLink to='/shop'>
        <Button>Shop now</Button>
      </NavLink>
    </div>
    <img src='../../images/Banner/tshirtOrange.webp' alt='tshirtOrange' />
  </div>
);

Banner.propTypes = {
};

export default Banner;
