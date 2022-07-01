import React from 'react';
import styles from './AboutBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

// import Components;

const AboutBox = () => (
  <div className={styles.root}>
    <FontAwesomeIcon icon={faServer} className={styles.icon} />
    <h3>Our Vision</h3>
    <p>Sed molestie auctor nisi, ut porta ex condimentum eget. Etiam velit nibh, gravida eget ligula vitae, sodales fringilla.</p>
  </div>
);

AboutBox.propTypes = {
};

export default AboutBox;
