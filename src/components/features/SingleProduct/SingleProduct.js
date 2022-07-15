import React from 'react';
import styles from './SingleProduct.module.scss';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { getProductById } from '../../../../src/redux/productsRedux.js';
import { addToCart } from '../../../../src/redux/cartRedux.js';
import { addToFavorites } from '../../../../src/redux/favoritesRedux.js';

import Button from '../../common/Button/Button';

const SingleProduct = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector(state => getProductById(state, id));

  const [amount, setAmount] = useState(1);
  const [prodSize, setProdSize] = useState(product.sizes[0].size);

  const handlePlus = () => {
    setAmount(amount + 1);
  };

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleInput = e => {
    if (e >= 1 || typeof e === 'number') {
      setAmount(parseInt(e));
    } else setAmount(amount);
  };

  const productParam = {
    id: id,
    image: product.image,
    name: product.name,
    size: prodSize,
    amount: amount,
    singlePrice: product.price,
    totalPrice: product.price * amount,
  };

  const handleAddToBasket = () => {
    dispatch(addToCart(productParam));
  };

  const handleAddToFav = () => {
    dispatch(addToFavorites(productParam));
  };

  return (
    <div className={clsx('container', styles.root)}>
      <NavLink to='/shop'>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className={styles.icon} />
      </NavLink>
      <div className={styles.imgContainer}>
        <img src={product.image} alt='' />
      </div>
      <div className={styles.description}>
        <FontAwesomeIcon icon={faHeart} className={styles.descIcon} onClick={handleAddToFav} />
        <h3>{product.name}</h3>
        <p><b>${product.price}</b></p>
        <p>{product.desc}</p>
        <div className={styles.sizes}>
          {product.sizes.map(size =>
            <span key={size.id}
              className={clsx(styles.size, size.size === prodSize ? styles.active : undefined)}
              onClick={() => setProdSize(size.size)}>{size.size}
            </span>
          )}
        </div>
        <p className={styles.quantity}>
          <span><b>Qty:</b></span>
          <input type='button' value='-' onClick={handleMinus} />
          <input type='text' value={amount} placeholder={amount} onChange={e => handleInput(e.target.value)} />
          <input type='button' value='+' onClick={handlePlus} />
          <Button onClick={handleAddToBasket}>Add to cart</Button>
        </p>
        <p><b>Category: </b>{product.category.name}</p>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
};

export default SingleProduct;
