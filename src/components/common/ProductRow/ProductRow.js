import React from 'react';
import styles from './ProductRow.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import Button from '../Button/Button';

const ProductRow = ({ actionText }) => (
  <div className={styles.root}>
    <div className={styles.desc}>
      <FontAwesomeIcon icon={faClose} className={styles.icon} />
      <img src='../../images/Products/tshirts/tshirtGrey.png' alt='' />
      <span>T-shirt Grey</span>
      <span>$49</span>
      {(actionText === 'View product') &&
        <>
          <span>
            Quantity: <input type='text' placeholder='1' />
          </span>
          <span>
            <input className={styles.messageInput} type='text' placeholder='Your message' />
          </span>
        </>
      }
    </div>
    <Button>{actionText}</Button>
  </div>
);

ProductRow.propTypes = {
  actionText: PropTypes.string,
};

export default ProductRow;
