import React from 'react';
import styles from './FavoriteBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../Button/Button';

const FavoriteBox = () => (
  <div className={styles.root}>
    <div className={styles.desc}>
      <FontAwesomeIcon icon={faClose} className={styles.icon} />
      <img src='../../images/Products/tshirts/tshirtGrey.png' alt='' />
      <span>T-shirt Grey</span>
      <span>$49</span>
    </div>
    <Button>Add to cart</Button>
  </div>
);

FavoriteBox.propTypes = {
};

export default FavoriteBox;
