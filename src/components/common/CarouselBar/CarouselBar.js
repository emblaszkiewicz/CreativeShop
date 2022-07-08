import React from 'react';
import styles from './CarouselBar.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../Button/Button';

const CarouselBar = () => (
  <div className={styles.root}>
    <Carousel interval={4500} autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false}>
      <div>
        <img src='../../images/Banner/baner1.png' alt='elo' />
        <div className={styles.content}>
          <span>Checkout our</span>
          <h1>Personalized T-shirts</h1>
          <p>Proin sollicitudin rhoncus hendrerit. Suspendisse vitae risus nulla. Fusce eu risus sem. Nunc id nisi volutpat, interdum purus.</p>
          <NavLink to='/shop'>
            <Button>See more!</Button>
          </NavLink>
        </div>
      </div>
      <div>
        <img src='../../images/Banner/baner2.png' alt='elo' />
        <div className={styles.content}>
          <span>Checkout our</span>
          <h1>Personalized T-shirts</h1>
          <p>Proin sollicitudin rhoncus hendrerit. Suspendisse vitae risus nulla. Fusce eu risus sem. Nunc id nisi volutpat, interdum purus.</p>
          <NavLink to='/shop'>
            <Button>See more!</Button>
          </NavLink>
        </div>
      </div>
      <div>
        <img src='../../images/Banner/baner3.png' alt='elo' />
        <div className={styles.content}>
          <span>Checkout our</span>
          <h1>Personalized T-shirts</h1>
          <p>Proin sollicitudin rhoncus hendrerit. Suspendisse vitae risus nulla. Fusce eu risus sem. Nunc id nisi volutpat, interdum purus.</p>
          <NavLink to='/shop'>
            <Button>See more!</Button>
          </NavLink>
        </div>
      </div>
    </Carousel>
  </div>
);

CarouselBar.propTypes = {
};

export default CarouselBar;
