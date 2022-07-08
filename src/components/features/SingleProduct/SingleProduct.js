import React from 'react';
import styles from './SingleProduct.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const SingleProduct = () => (
  <div className={clsx('container', styles.root)}>
    <NavLink to='/shop'>
      <FontAwesomeIcon icon={faArrowAltCircleLeft} className={styles.icon} />
    </NavLink>
    <div className={styles.imgContainer}>
      <img src='../../images/Products/tshirts/tshirtGrey.png' alt='' />
    </div>
    <div className={styles.description}>
      <h3>T-shirt Grey</h3>
      <p><b>$49</b></p>
      <p>Aliquam vitae eros ac ligula auctor ultrices imperdiet a leo. Pellentesque hendrerit placerat odio, at interdum erat accumsan vulputate. Maecenas nec est sit amet justo finibus finibus. Pellentesque sodales ligula.</p>
      <p className={styles.quantity}>
        <span><b>Qty:</b></span>
        <input type='button' value='-' />
        <input type='text' placeholder='1' />
        <input type='button' value='+' />
        <Button>Add to cart</Button>
      </p>
      <p><b>Category: </b>T-shirts</p>
    </div>
  </div>
);

SingleProduct.propTypes = {
};

export default SingleProduct;
