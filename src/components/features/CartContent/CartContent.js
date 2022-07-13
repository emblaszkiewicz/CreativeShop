import React from 'react';
import styles from './CartContent.module.scss';
import { useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getAllCart } from '../../../../src/redux/cartRedux.js';

import { amountCounter } from '../../../utils/amountCounter';

import ProductRow from '../../common/ProductRow/ProductRow';
import Button from '../../common/Button/Button';

const CartContent = () => {

  const [summary, setSummary] = useState(0);
  const [message, setMessage] = useState('');

  const cartProducts = useSelector(getAllCart);

  useEffect(() => {
    setSummary(amountCounter(cartProducts));
  }, [cartProducts]);

  const handleSubmit = () => {
    const order = {
      products: cartProducts,
      shippingAddress: [],
      message: message,
    };
    setMessage('');
    localStorage.clear('cart');
    console.log(order);
  };

  return (
    <div className={clsx('container', styles.root)}>
      <div className={styles.header}>
        <span>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
          Cart
        </span>
        <span>Summary: ${summary}</span>
      </div>
      {cartProducts ?
        cartProducts.map(product =>
          <ProductRow {...product} key={product.id} actionText='View product' />
        )
        :
        <></>
      }
      <textarea placeholder='Your message...' onChange={e => setMessage(e.target.value)} />
      <div className={styles.buttons}>
        <Button onClick={handleSubmit}>Continue order</Button>
      </div>
    </div>
  );
};

CartContent.propTypes = {
};

export default CartContent;
