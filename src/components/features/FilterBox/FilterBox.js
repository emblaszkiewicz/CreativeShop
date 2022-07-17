import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './FilterBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

import { getAllCategories } from '../../../../src/redux/categoriesRedux.js';

// import Components;

const FilterBox = ({ handleCategoryChange }) => {

  const categories = useSelector(getAllCategories);

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
            {categories.map(category =>
              <li
                key={category._id}
                onClick={() => {handleCategoryChange(category._id); setVisability(false);}}>
                {category.name}
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  );
};

FilterBox.propTypes = {
  handleCategoryChange: PropTypes.func,
};

export default FilterBox;
