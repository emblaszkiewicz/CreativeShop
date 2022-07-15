import React from 'react';
import styles from './CarouselBar.module.scss';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

import { getAllBanners } from '../../../../src/redux/bannersRedux';

import Button from '../Button/Button';

const CarouselBar = () => {

  const banners = useSelector(getAllBanners);

  return (
    <div className={styles.root}>
      <Carousel interval={4500} autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={false} showStatus={false}>
        {banners.map(banner =>
          <div key={banner._id}>
            <img src={banner.image} alt={banner.title} />
            <div className={styles.content}>
              <span>Checkout our</span>
              <h1>{banner.title}</h1>
              <p>{banner.text}</p>
              <NavLink to='/shop'>
                <Button>See more!</Button>
              </NavLink>
            </div>
          </div>
        )}
      </Carousel>
    </div>
  );
};

CarouselBar.propTypes = {
};

export default CarouselBar;
