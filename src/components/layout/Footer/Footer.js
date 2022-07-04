import React from 'react';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelopeOpen, faLocationDot, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Footer = () => (
  <div className={styles.root}>
    <div className={clsx('container', styles.footerContent)}>
      <div className={styles.footerBox}>
        <h3>Account</h3>
        <ul>
          <li>
            <NavLink to='/'>Log in</NavLink>
          </li>
          <li>
            <NavLink to='/'>Checkout</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.footerBox}>
        <h3>Payment</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
            <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
            <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
          </li>
        </ul>
      </div>
      <div className={styles.footerBox}>
        <h3>Our address</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelopeOpen} className={styles.icon} />
            <span>example@example.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <span>1093 Marigold Lane, Miami</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <span>+55 123-458-657</span>
          </li>
        </ul>
      </div>
      <div className={styles.footerBox}>
        <h3>Newsletter</h3>
        <ul>
          <li>Aliquam vestibulum elit et risus pulvinar, nec pellentesque tortor dictum. Cras vitae.</li>
          <li>
            <input type='text' placeholder='Your email...'></input>
            <Button variant='small'>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </Button>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.copyright}>
      <span>&copy; 2022 Michal Blaszkiewicz</span>
    </div>
  </div>
);

Footer.propTypes = {
};

export default Footer;
