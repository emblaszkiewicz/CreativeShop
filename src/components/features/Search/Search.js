import React from 'react';
import styles from './Search.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

//import PropTypes from 'prop-types';
// import clsx from 'clsx';

import { updateSearchString } from '../../../../src/redux/searchRedux.js';

import Button from '../../common/Button/Button';

const Search = () => {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = () => {
    dispatch(updateSearchString(searchString));
    setSearchString('');
  };

  return (
    <div className={styles.root}>
      <div className={styles.searchBar}>
        <input type='text' placeholder='Search products...' onChange={e => setSearchString(e.target.value)} />
        <NavLink to='/shop'>
          <Button variant='searchBtn' onClick={handleSubmit}>Search</Button>
        </NavLink>
      </div>
    </div>
  );
};

Search.propTypes = {
};

export default Search;
