import React from 'react';
import { useState, useEffect } from 'react';
import styles from './FilterBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBasket, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const FilterBox = () => {

  const [visability, setVisability] = useState(false);
  const [width, setWidth] = useState('');

  useEffect(() => {
    window.addEventListener('resize', setWidth(window.innerWidth));
  }, []);

  const toggle = () => {
    setVisability(!visability);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <FontAwesomeIcon
          icon={visability ? faClose : faBars}
          className={styles.hamburger}
          onClick={toggle}
        />
        <div className={styles.categories}>
          <h3>Categories</h3>
        </div>
        {(visability || width > 1221) &&
          <ul>
            <li>T-shirts</li>
            <li>Hats</li>
            <li>Mugs</li>
          </ul>
        }
      </div>
    </div>
  );
};

FilterBox.propTypes = {
};

export default FilterBox;
