import React from 'react';
import styles from './Cart.module.scss';

//import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import CartContent from '../../features/CartContent/CartContent';

const Cart = () => (
  <div className={styles.root}>
    <CartContent />
  </div>
);

Cart.propTypes = {
};

export default Cart;
