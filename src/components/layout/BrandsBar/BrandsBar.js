import React from 'react';
import styles from './BrandsBar.module.scss';
import { useSelector } from 'react-redux/es/exports';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

import { getAllBrands } from '../../../../src/redux/brandsRedux';

// import Components;

const BrandsBar = () => {

  const brands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.separator}></div>
        {brands.map(brand =>
          <img key={brand._id} src={brand.image} alt={brand._id} />
        )}
      </div>
    </div>
  );
};

BrandsBar.propTypes = {
};

export default BrandsBar;
