import React from 'react';
import styles from './AboutBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const AboutBox = ({ icon, title, text }) => (
  <div className={styles.root}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

AboutBox.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default AboutBox;
