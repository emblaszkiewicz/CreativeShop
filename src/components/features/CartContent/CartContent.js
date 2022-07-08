import React from 'react';
import styles from './CartContent.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import ProductRow from '../../common/ProductRow/ProductRow';

const CartContent = () => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.header}>
      <span>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
        Cart
      </span>
      <span>Summary: $147</span>
    </div>
    <ProductRow actionText='Recalculate' />
    <ProductRow actionText='Recalculate' />
    <ProductRow actionText='Recalculate' />
  </div>
);

CartContent.propTypes = {
};

export default CartContent;