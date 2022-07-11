import React from 'react';
import styles from './SingleProduct.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { getProductById } from '../../../../src/redux/productsRedux.js';

import Button from '../../common/Button/Button';

const SingleProduct = () => {

  const { id } = useParams();

  const product = useSelector(state => getProductById(state, id));

  return (
    <div className={clsx('container', styles.root)}>
      <NavLink to='/shop'>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className={styles.icon} />
      </NavLink>
      <div className={styles.imgContainer}>
        <img src={product.image} alt='' />
      </div>
      <div className={styles.description}>
        <FontAwesomeIcon icon={faHeart} className={styles.descIcon} />
        <h3>{product.name}</h3>
        <p><b>${product.price}</b></p>
        <p>{product.desc}</p>
        <div className={styles.sizes}>
          {product.sizes.map(size =>
            <span key={size.id} className={styles.size}>{size.size}</span>
          )}
        </div>
        <p className={styles.quantity}>
          <span><b>Qty:</b></span>
          <input type='button' value='-' />
          <input type='text' placeholder='1' />
          <input type='button' value='+' />
          <Button>Add to cart</Button>
        </p>
        <p><b>Category: </b>{product.category}</p>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
};

export default SingleProduct;
