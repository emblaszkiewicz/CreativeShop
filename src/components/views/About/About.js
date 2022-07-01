import React from 'react';
import styles from './About.module.scss';

import PropTypes from 'prop-types';
// import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../../src/redux/exampleRedux.js';

import AboutLayout from '../../layout/AboutLayout/AboutLayout';

const About = () => (
  <div className={styles.root}>
    <AboutLayout />
  </div>
);

About.propTypes = {
};

export default About;
