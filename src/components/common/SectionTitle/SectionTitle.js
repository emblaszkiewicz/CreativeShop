import React from 'react';
import styles from './SectionTitle.module.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const SectionTitle = ({title}) => (
  <div className={clsx('container', styles.root)}>
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
