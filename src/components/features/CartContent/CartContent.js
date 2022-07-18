import React from 'react';
import styles from './CartContent.module.scss';
import { useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getAllCart, removeFromCart } from '../../../../src/redux/cartRedux.js';

import { amountCounter } from '../../../utils/amountCounter';

import ProductRow from '../../common/ProductRow/ProductRow';
import Button from '../../common/Button/Button';
import ShipmentForm from '../ShipmentForm/ShipmentForm';

const CartContent = () => {

  const dispatch = useDispatch();

  const [summary, setSummary] = useState(0);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const cartProducts = useSelector(getAllCart);

  useEffect(() => {
    setSummary(amountCounter(cartProducts));
  }, [cartProducts]);

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={clsx('container', styles.root)}>
      {!showForm &&
        <>
          <div className={styles.header}>
            <span>
              <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
              Cart
            </span>
            <span>Summary: ${summary}</span>
          </div>
          {cartProducts ?
            cartProducts.map(product =>
              <ProductRow {...product} key={product.id} actionText='View product' actionHandler={handleRemove} />
            )
            :
            <></>
          }
          <textarea placeholder='Your message...' onChange={e => setMessage(e.target.value)} />
          <div className={styles.buttons}>
            <Button onClick={() => setShowForm(true)}>Continue order</Button>
          </div>
        </>
      }
      {showForm &&
      <ShipmentForm action={setShowForm} cartProducts={cartProducts} message={message} />
      }
    </div>
  );
};

CartContent.propTypes = {
};

export default CartContent;
