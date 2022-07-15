import React from 'react';
import styles from './TopBar.module.scss';
import { useSelector } from 'react-redux/es/exports';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBasket, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

import { getAllCart } from '../../../../src/redux/cartRedux.js';

import { amountCounter } from '../../../utils/amountCounter';
import { itemsCounter } from '../../../utils/itemsCounter';

import Button from '../../common/Button/Button';
import Search from '../../features/Search/Search';

const TopBar = () => {

  const cartProducts = useSelector(getAllCart);

  const [visability, setVisability] = useState(false);
  const [width, setWidth] = useState('');
  const [summary, setSummary] = useState(0);
  const [items, setItems] = useState(0);

  useEffect(() => {
    setSummary(amountCounter(cartProducts));
    setItems(itemsCounter(cartProducts));
  }, [cartProducts]);


  useEffect(() => {
    window.addEventListener('resize', setWidth(window.innerWidth));
  }, []);

  const toggle = () => {
    setVisability(!visability);
  };

  return (
    <nav className={styles.root}>
      <FontAwesomeIcon
        icon={visability ? faClose : faBars}
        className={styles.hamburger}
        onClick={toggle}
      />
      <div className={styles.logo}>Creative Shop</div>
      {(visability || width > 767) &&
        <>
          <Search />
          <ul>
            <li>
              <NavLink to='/login'>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink to='/favorites'>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </NavLink>
            </li>
            <li>
              <div className={styles.cart}>
                <NavLink to='/cart'>
                  <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon} />
                </NavLink>
                <span className={styles.countner}>{items}</span>
                <span className={styles.totalPrice}>${summary}</span>
              </div>
            </li>
          </ul>
        </>
      }
    </nav>
  );
};

TopBar.propTypes = {
};

export default TopBar;
