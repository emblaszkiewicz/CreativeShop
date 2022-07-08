import React from 'react';
import { useState, useEffect } from 'react';
import styles from './TopBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBasket, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const TopBar = () => {

  const [visability, setVisability] = useState(false);
  const [width, setWidth] = useState('');

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
          <div className={styles.searchBar}>
            <input type='text' placeholder='Search products...' />
            <Button variant='searchBtn'>Search</Button>
          </div>
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
                <span className={styles.countner}>2</span>
                <span className={styles.totalPrice}>$102.00</span>
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
