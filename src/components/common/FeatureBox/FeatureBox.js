import React from 'react';
import styles from './FeatureBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const FeatureBox = ({ icon, text }) => (
  <div className={styles.root}>
    <div className={styles.iconContainer}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </div>
    <h3>{text}</h3>
  </div>
);

FeatureBox.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

export default FeatureBox;
