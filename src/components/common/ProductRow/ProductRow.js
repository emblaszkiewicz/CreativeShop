import React from 'react';
import styles from './ProductRow.module.scss';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

import { editCartProduct } from '../../../../src/redux/cartRedux.js';

import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const ProductRow = ({ actionText, actionHandler, image, name, size, singlePrice, amount, id }) => {

  const dispatch = useDispatch();

  const handleEdit = (id, qty) => {
    dispatch(editCartProduct(id, qty));
  };

  return (
    <div className={styles.root}>
      <div className={styles.desc}>
        <FontAwesomeIcon icon={faClose} className={styles.icon} onClick={() => actionHandler(id)} />
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>Size: {size}</span>
        <span>${singlePrice}</span>
        {(actionText === 'View product') &&
          <>
            <span>
              Qty: <input type='text' placeholder={amount} onChange={e => handleEdit(id, parseInt(e.target.value))} />
            </span>
          </>
        }
      </div>
      <NavLink to={`/product/${id}`}>
        <Button>{actionText}</Button>
      </NavLink>
    </div>
  );
};

ProductRow.propTypes = {
  actionText: PropTypes.string,
  actionHandler: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  singlePrice: PropTypes.number,
  amount: PropTypes.number,
  id: PropTypes.string,
};

export default ProductRow;
